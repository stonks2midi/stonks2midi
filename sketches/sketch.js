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

let testData = {}

const dummyArray = [60, 0.8];

class Company {
  constructor(name) {
    this.companyName = name;
    this.synth = new Tone.Synth().toMaster();
    this.currentValues = [];
  }

  makeNoteValues(index) {

    // FIX THIS, this.currentValues is not being set 
    var volume = testData[companyName].volume[index]
    var sharePrice = testData[companyName].sharePrice[index]

    var currentValues = [volume, sharePrice]

    // This console log isn't working
    console.log(currentValues)

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


async function start() {

  testData = await getData()

  const companyKeys = ['apple', 'google', 'microsoft', 'wetherspoons']

  var beat = 0;
  // var maxBeats = 0;

  const companies = companyKeys.map(function (companyKey) {
    return new Company(companyKey);
  })

  console.log(companies)

  // maxBeats = testData[Object.keys(testData)[0]].sharePrice.length;

  var mainLoop = new Tone.Clock(function () {
    for (var i = 0; i < companies.length; i++) {
      companies[i].makeAndPlay(beat);
    }

    beat++;

    // if (beat >= maxBeats) {
    //   mainLoop.stop();
    // }
  }, 4);

  mainLoop.start();
}

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

start();