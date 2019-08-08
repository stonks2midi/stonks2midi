import testData from "./companies.js";

// const testData = {
//   "companyA": {

//     'sharePrice': [67, 70, 76, 56, 45, 40, 32, 25],
//     'volume': [45, 50, 56, 60, 62, 62, 61, 58]
//   },

//   "companyB": {

//     'sharePrice': [67, 70, 76, 56, 45, 40, 32, 25],
//     'volume': [45, 50, 56, 60, 62, 62, 61, 58]
//   },

//   "companyC": {
//     'sharePrice': [67, 70, 76, 56, 45, 40, 32, 25],
//     'volume': [45, 50, 56, 60, 62, 62, 61, 58]
//   },

//   "companyD": {
//     'sharePrice': [67, 70, 76, 56, 45, 40, 32, 25],
//     'volume': [45, 50, 56, 60, 62, 62, 61, 58]
//   },

//   "ukInterestRate": [0.67, 0.70, 0.76, 0.56, 0.45, 0.40, 0.32, 0.25],
//   "GBPtoUSD": [1.67, 1.70, 1.76, 1.56, 1.45, 1.40, 1.32, 1.25]

// }

// async function getAsyncData() {
//   const data = await getData();
//   console.log(data);
// }

// getAsyncData();

// TODO:
// 1. Fix this.currentValues
// If you see 'getData.js:34 Uncaught (in promise) TypeError: Cannot convert undefined or null to object'  it's probably an api calls error, check the Network tab. Maybe cache these results!

// IMPORTANT UNMUTE BUSINESS

// import UnmuteButton from "../node_modules/unmute/build/unmute.js";

// UnmuteButton();

// VARIABLES

const companyKeys = ["apple", "google", "microsoft", "wetherspoons"];

// FUNCTIONS

function mapRange(value, a, b, c, d) {
  // first map value from (a..b) to (0..1)
  value = (value - a) / (b - a);
  // then map it from (0..1) to (c..d) and return it
  return c + value * (d - c);
}

// NOT FUNCTIONS


var chorus = new Tone.Chorus({
  frequency: 1.5,
  delayTime: 3.5,
  depth: 0.7,
  type: "sine",
  spread: 180
})

var filter = new Tone.Filter({
  type: "lowpass",
  frequency: 350,
  rolloff: -12,
  Q: 1,
  gain: 0
}).toMaster()


var vibrato = new Tone.Vibrato({
  maxDelay: 0.005,
  frequency: 5,
  depth: 0.1,
  type: "sine"
}).toMaster()

var appleSynth = new Tone.Synth({
  oscilator: {
    type: "triangle"
  },
  enevlope: {
    attack: 0.005,
    decay: 0.1,
    sustain: 0.0282,
    release: 1

  }
}).connect(vibrato)

var spoonsSynth = new Tone.FMSynth({
  harmonicity: 3,
  modulationIndex: 10,
  detune: 0,
  oscillator: {
    type: "sine"
  },
  envelope: {
    attack: 0.01,
    decay: 0.001,
    sustain: 0.1,
    release: 0.5
  },
  modulation: {
    type: "square"
  },
  modulationEnvelope: {
    attack: 0.5,
    decay: 0,
    sustain: 1,
    release: 0.5
  }
}).toMaster()

var microsoftSynth = new Tone.PluckSynth({
  attackNoise: 1,
  dampening: 4000,
  resonance: 0.7
}).connect(filter)

var googleSynth = new Tone.FMSynth({
  frequency: 200,
  envelope: {
    attack: 0.001,
    decay: 0.1577,
    release: 0.2
  },
  harmonicity: 5.1,
  modulationIndex: 32,
  resonance: 4000,
  octaves: 1.5
}).connect(chorus)

var synths = {
  apple: appleSynth,
  wetherspoons: spoonsSynth,
  google: googleSynth,
  microsoft: microsoftSynth
}


// Due to the way that memory is managed in JS, the code below makes sure that a new memory area is allocated to store an indirect copy of `testData`.
testDataDisplay = JSON.parse(JSON.stringify(testData));

function normalise(data) {
  Object.keys(data)
    .filter(function (companyName) {
      return companyKeys.includes(companyName);
    })
    .forEach(function (companyName) {
      let company = data[companyName];

      let minVolume = Math.min(...company.volume);
      let maxVolume = Math.max(...company.volume);

      let minSharePrice = Math.min(...company.sharePrice);
      let maxSharePrice = Math.max(...company.sharePrice);

      company.volume = company.volume.map(function (volume) {
        return mapRange(volume, minVolume, maxVolume, 0, 1);
      });
      company.sharePrice = company.sharePrice.map(function (sharePrice) {
        return Math.round(mapRange(sharePrice, minSharePrice, maxSharePrice, 0, 27));
      });
    });
};

const SCALES = {
  major: [36, 38, 40, 41, 43, 45, 47, 48, 50, 52, 53, 55, 57, 59, 60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83],
  minor: [36, 38, 39, 41, 43, 44, 46, 48, 50, 51, 53, 55, 56, 58, 60, 62, 63, 65, 67, 68, 70, 72, 74, 75, 77, 79, 80, 82]
};

const SEQUENCES = [
  ["current"],
  ["current", "current"],
  ["previous", null],
  ["current", "nextNext"],
  ["current", "current", "current", "current"],
  ["current", "current", "previousPrevious", "current"],
  ["current", "current", null, "current"],
  [null, "current", null, "current"],
  ["current", null, "current", null],
  ["next", null, "current", null],
  ["current", "next", "current", "next"],
  ["current", "next", "previousPrevious", "current"],
  ["nextNext", "current", "current", "previousPrevious"],
  ["current", ["next", null, "nextNext", "next"], "current", null],
  ["current", "next", "current", "previous", "current", "next", "current", "next"],
  ["current", ["next", null, "next", "current"], "current", ["current", "next"], "current"],
  [
    ["current", null, "next", "current"], "current", "next", "current", ["current", "previous"]
  ],
  [
    ["next", "current", null, "current"],
    ["current", null, null, "nextNext"], "current", "next"
  ],
  ["current", [null, "previousPrevious", null, "previous"], "current", [null, "current"], "current"],
  [
    ["current", "next", null, "current"],
    [null, "current"],
    ["current", null, "current", null], "next", "current"
  ],
  [
    ["current", "next", null, "next"],
    ["next", "current", null, "current"],
    ["next", "next", null, "current"], "current"
  ],
  [
    ["nextNext", "next", "current", "next"],
    ["current", null, "current", null],
    ["previous", "current", "previous", "current"], null, ["nextNext", "current"]
  ],
];

const KEEP_TREND_HISTORY = 2;
const PATTERN_CHANGE_INTERVAL = 4;

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
    // this.synth = synths[name];
    this.synth = new Tone.Synth().toMaster();
    this.currentValues = [];
    this.mode = "major";
    this.sequence = null;
  }

  getNoteFromScale(note) {
    // console.log(SCALES[this.mode][Math.min(Math.round(note * 2), 27)]);
    // return SCALES[this.mode][Math.min(Math.round(note * 2), 27)];

    return SCALES[this.mode][note];
  }

  makeNoteValues(index, keepTrendHistory = 2) {
    var volume = testData[this.companyName].volume[index];
    var sharePrice = 0;

    // this.currentValues = [Math.round(volume), Math.round(sharePrice)];
    this.currentValues = [volume, "8n"];
  }

  playNote() {
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

        if (typeof (data) == "string") { // Reference to note
          newArray.push(timeline[data][0]);
        } else if (typeof (data) == "object" && data != null) { // Subdivision
          newArray.push(iterateSequence(data));
        }
      }

      return newArray;
    }

    formattedSequenceBar = iterateSequence(sequence);

    return new Tone.Sequence(callback, formattedSequenceBar, time);
  }

  playSequence(index, sequence = ["current"]) {
    var thisScope = this;
    var noteLength = sequence.length + "n";

    if (this.sequence != null) {
      this.sequence.dispose();
    }
    this.synth.volume.value = testData[this.companyName].volume[index];

    this.sequence = this.sequenceFactory(function (time, note) {
      if (typeof (note) == "number") {
        thisScope.synth.triggerAttackRelease(Tone.Frequency(thisScope.getNoteFromScale(note), "midi").toNote(), noteLength);
      }
    }, this.getUniformTimeline(index), sequence, noteLength);

    this.sequence.start();
  }

  makeAndPlay(beat, keepTrendHistory = 2) {
    this.makeNoteValues(beat, keepTrendHistory);
    this.playNote();
  }

  getActivityAmount(index, amount) {
    var start = this.getPreviousNotes(index, amount)[0][0];
    var end = testData[this.companyName].sharePrice[index];

    return Math.abs(end - start);
  }
}

async function start() {
  // testData = await getData();

  normalise(testData);

  var beat = 0;
  var maxBeats = 0;

  const companies = companyKeys.map(function (companyKey) {
    return new Company(companyKey);
  });

  // const companies = [new Company("microsoft")];

  var currentSequence = new Array(companies.length).fill(SEQUENCES[0]);
  var comapnyHistoryLengths = [];

  for (var i = 0; i < companies.length; i++) {
    comapnyHistoryLengths.push(testData[companies[i].companyName]["sharePrice"].length);
  }

  maxBeats = Math.min(...comapnyHistoryLengths);

  Tone.Transport.start();

  var mainLoop = new Tone.Clock(function () {
    for (var i = 0; i < companies.length; i++) {
      updateGraph(companies[i].getUniformTimeline(beat).current[0], i, companies[i].companyName, beat);

      companies[i].playSequence(beat, currentSequence[i]);

      if (beat % PATTERN_CHANGE_INTERVAL == 0) {
        currentSequence[i] = SEQUENCES[Math.min(companies[i].getActivityAmount(beat, 2) + 10, SEQUENCES.length)];
      }
    }

    beat++;

    if (beat >= maxBeats) {
      for (var i = 0; i < companies.length; i++) {
        companies[i].sequence.stop();
      }

      mainLoop.stop();
    }
  }, 1 / 8);

  mainLoop.start();
}

start();