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


const dummyArray = [60, 0.8];

class Company {
  constructor() {
    var synth = new Tone.Synth().toMaster();
  }

  async makeNoteValues(company, index) {
    const testData = await getData();

    console.log(testData)

    var volume = testData[company].volume[index]
    var sharePrice = testData[company].sharePrice[index]

    var currentValues = [volume, sharePrice]

    console.log(currentValues)

    return currentValues
  }

  playNote() {
    synth.volume.value = 6;
    synth.triggerAttackRelease(Tone.Frequency(60, "midi").toNote(), "8n");
  }
}

async function setup() {
  // create a canvas
  createCanvas(600, 800);

  const companyA = new Company()

  const companyNotes = await companyA.makeNoteValues('apple', 0)

  console.log(companyNotes)
}

function draw() {
  // colour the background black
  background(0);
  // select white as a colour
  fill(255);
  // draw a rectangle
  rect(150, 150, 100, 100);
}