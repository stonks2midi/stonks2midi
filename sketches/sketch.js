const testData = {
  "companyA": {

    'sharePrice': [67, 70, 43, 56, 45, 40, 45, 25],
    'volume': [6, 6, 5, 6, 7, 6, 6, 6]
  },

  "companyB": {

    'sharePrice': [67, 56, 76, 34, 45, 76, 32, 25],
    'volume': [6, 6, 5, 6, 6, 6, 5, 6]
  },

  "companyC": {
    'sharePrice': [67, 70, 54, 56, 54, 40, 23, 25],
    'volume': [6, 7, 5, 6, 6, 6, 6, 6]
  },

  "companyD": {
    'sharePrice': [64, 34, 76, 34, 45, 40, 32, 65],
    'volume': [6, 6, 6, 6, 7, 6, 6, 5]
  },

  "ukInterestRate": [0.67, 0.70, 0.76, 0.56, 0.45, 0.40, 0.32, 0.25],
  "GBPtoUSD": [1.67, 1.70, 1.76, 1.56, 1.45, 1.40, 1.32, 1.25]

}


const dummyArray = [60, 0.8];

class Company {
  constructor(name) {
    this.companyName = name;
    this.synth = new Tone.Synth().toMaster();
    this.currentValues = [];
  }

  makeNoteValues(index) {
    var volume = testData[this.companyName].volume[index];
    var sharePrice = testData[this.companyName].sharePrice[index];

    this.currentValues = [sharePrice, volume];
  }

  playNote() {
    this.synth.volume.value = this.currentValues[1];
    this.synth.triggerAttackRelease(Tone.Frequency(this.currentValues[0], "midi").toNote(), "8n");
  }

  makeAndPlay(beat) {
    this.makeNoteValues(beat);
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

var mainLoop = new Tone.Clock(function() {
  for (var i = 0; i < companies.length; i++) {
    companies[i].makeAndPlay(beat);
  }

  beat++;

  if (beat >= maxBeats) {
    mainLoop.stop();
  } 
}, 4);

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
