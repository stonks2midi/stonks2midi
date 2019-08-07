const testData = {
  "companyA": {
    "sharePrice": [23, 15, 21, 18, 16, 21, 25, 23],
    "volume": [0.6, 0.6, 0.5, 0.6, 0.7, 0.6, 0.6, 0.6]
  },
  "companyB": {
    "sharePrice": [17, 14, 10, 9, 11, 12, 15, 20],
    "volume": [0.6, 0.6, 0.5, 0.6, 0.6, 0.6, 0.5, 0.6]
  },
  "companyC": {
    "sharePrice": [23, 22, 24, 25, 27, 26, 25, 22],
    "volume": [0.6, 0.7, 0.5, 0.6, 0.6, 0.6, 0.6, 0.6]
  },
  "companyD": {
    "sharePrice": [21, 23, 18, 16, 15, 13, 11, 9],
    "volume": [0.6, 0.6, 0.6, 0.6, 0.7, 0.6, 0.6, 0.5]
  },
  "ukInterestRate": [0.67, 0.70, 0.76, 0.56, 0.45, 0.40, 0.32, 0.25],
  "GBPtoUSD": [1.67, 1.70, 1.76, 1.56, 1.45, 1.40, 1.32, 1.25]
}

const SCALES = {
  major: [36, 38, 40, 41, 43, 45, 47, 48, 50, 52, 53, 55, 57, 59, 60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83],
  minor: [36, 38, 39, 41, 43, 44, 46, 48, 50, 51, 53, 55, 56, 58, 60, 62, 63, 65, 67, 68, 70, 72, 74, 75, 77, 79, 80, 82]
};

const KEEP_TREND_HISTORY = 2;

function decimalToDecibels(decimal) {
  var decibels = 0;

  if (decimal != 0) {
    decibels = 20 * Math.log10(decimal);
  } else {
    decibels = -Infinity;
  }

  return decibels;
}

class Company {
  constructor(name) {
    this.companyName = name;
    this.synth = new Tone.Synth().toMaster();
    this.currentValues = [];
    this.mode = "major";
    this.sequence = null;
  }

  getNoteFromScale(index) {
    return SCALES[this.mode][index];
  }

  makeNoteValues(index, keepTrendHistory = 2) {
    var volume = testData[this.companyName].volume[index];
    var sharePrice = 0;

    sharePrice = SCALES[this.mode][testData[this.companyName].sharePrice[index]];
    this.currentValues = [sharePrice, volume];

    if (this.getMajorMinor(index, keepTrendHistory) != "none") {
      this.mode = this.getMajorMinor(index, keepTrendHistory);
    }
  }

  getPreviousNotes(index, amount) {
    var previousNotes = [];

    for (var i = 1; i <= amount; i++) {
      if (index - i < 0) {
        previousNotes.push([0, -Infinity]);
      } else {
        previousNotes.push([testData[this.companyName].sharePrice[index - i], testData[this.companyName].volume[index - i]])
      }
    }

    return previousNotes;
  }

  getNextNotes(index, amount) {
    var nextNotes = [];

    for (var i = 1; i <= amount; i++) {
      if (index + i > testData[this.companyName].sharePrice.length) {
        nextNotes.push([0, -Infinity]);
      } else {
        nextNotes.push([testData[this.companyName].sharePrice[index + i], testData[this.companyName].volume[index + i]])
      }
    }

    return nextNotes;
  }

  getDirectionality(index, amount) {
    var previousNotes = this.getPreviousNotes(index, amount);
    var lastNote = -Infinity;
    var change = 0;

    for (var i = 0; i < amount; i++) {
      if (previousNotes[i] < lastNote) {
        change--;
      } else if (previousNotes[i] > lastNote) {
        change++;
      }

      lastNote = previousNotes[i];
    }

    return change;
  }

  getMajorMinor(index, amount) {
    var change = this.getDirectionality(index, amount);

    if (change == 0) {
      return "none";
    } else if (change < 0) {
      return "minor";
    } else if (change > 0) {
      return "major";
    }
  }

  getUniformTimeline(index) {
    var previousNotes = this.getPreviousNotes(index, 2);
    var nextNotes = this.getNextNotes(index, 2);
    var currentNote = [testData[this.companyName].sharePrice[index], testData[this.companyName].volume[index]];

    return {
      previousPrevious: previousNotes[0],
      previous: previousNotes[1],
      current: currentNote,
      next: nextNotes[0],
      nextNext: nextNotes[1],
      mode: this.getMajorMinor(index, 2)
    };
  }

  playNote() {
    this.synth.volume.value = decimalToDecibels(this.currentValues[1]);
    this.synth.triggerAttackRelease(Tone.Frequency(this.currentValues[0], "midi").toNote(), "8n");
  }

  sequenceFactory(callback, timeline, sequence, time, index) {
    var formattedSequenceBar = [];

    function iterateSequence(array) {
      var newArray = [];
      
      for (var i = 0; i < array.length; i++) {
        var data = array[i];

        if (typeof(data) == "string") { // Reference to note
          newArray.push(timeline[data][0]);
        } else if (typeof(data) == "object") { // Subdivision
          newArray.push(iterateSequence(data));
        }
      }

      return newArray;
    }

    formattedSequenceBar = iterateSequence(sequence);

    return new Tone.Sequence(callback, formattedSequenceBar, time);
  }

  playSequence(index, sequence = ["current", ["next", "next"], "current", "next"], time = "8n") {
    var thisScope = this;

    if (this.sequence != null) {
      this.sequence.dispose();
    }

    this.synth.volume.value = testData[this.companyName].volume[index];

    this.sequence = this.sequenceFactory(function(time, note) {
      if (typeof(note) == "number") {
        thisScope.synth.triggerAttackRelease(Tone.Frequency(thisScope.getNoteFromScale(note), "midi").toNote(), "8n");
      }
    }, this.getUniformTimeline(index), sequence, time);

    this.sequence.start();
  }

  makeAndPlay(beat, keepTrendHistory = 2) {
    this.makeNoteValues(beat, keepTrendHistory);
    this.playNote();
  }
}

var beat = 0;
var companies = [];
var maxBeats = 0;

for (var i = 0; i < Object.keys(testData).length - 2; i++) {
  companies.push(new Company(Object.keys(testData)[i]));
}

maxBeats = testData[Object.keys(testData)[0]].sharePrice.length;

Tone.Transport.start();

var mainLoop = new Tone.Clock(function() {
  for (var i = 0; i < companies.length; i++) {
    companies[i].playSequence(beat);

    // console.log(
    //   companies[i].companyName,
    //   companies[i].getUniformTimeline(beat)
    // );
  }

  beat++;

  if (beat >= maxBeats) {
    for (var i = 0; i < companies.length; i++) {
      companies[i].sequence.stop();
    }

    mainLoop.stop();
  } 
}, 1);

mainLoop.start();

// function setup() {
//   // create a canvas
//   createCanvas(600, 800);

//   console.log(makeNoteValues(1, 0))
// }

// function draw() {
//   // colour the background black
//   background(0);
//   // select white as a colour
//   fill(255);
//   // draw a rectangle
//   rect(150, 150, 100, 100);
// }
