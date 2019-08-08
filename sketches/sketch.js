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

const normalise = function (data) {
  Object.keys(data)
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
        return mapRange(sharePrice, minSharePrice, maxSharePrice, 0, 27);
      });
    });
};

class Company {
  constructor(name) {
    this.companyName = name;
    this.synth = new Tone.Synth().toMaster();
    this.currentValues = [];
  }

  makeNoteValues(index) {
    // FIX THIS, this.currentValues is not being set
    var volume = testData[this.companyName].volume[index];
    var sharePrice = testData[this.companyName].sharePrice[index];

    // this.currentValues = [Math.round(volume), Math.round(sharePrice)];
    this.currentValues = [volume, "8n"];
  }

  playNote() {
    //this.synth.volume.value = this.currentValues[0];
    // var note = Tone.Frequency(this.currentValues[1], "midi").toNote();
    // console.log(`note is ${note}`);
    // var velocity = mapRange(this.currentValues[0], 0, 100, 0, 1);
    // console.log(velocity);
    // this.synth.triggerAttackRelease("C4", "16n", undefined, 1);
  }

  makeAndPlay(beat) {
    this.makeNoteValues(beat);
    this.playNote();
  }
}

async function start() {
  // testData = await getData();

  normalise(testData);

  console.log(testData);

  var beat = 0;
  // var maxBeats = 0;

  const companies = companyKeys.map(function (companyKey) {
    return new Company(companyKey);
  });

  // console.log(companies);

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