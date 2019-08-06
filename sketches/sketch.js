const testData = {
  "companyA": {

    'sharePrice': [67, 70, 76, 56, 45, 40, 32, 25],
    'volume': [45, 50, 56, 60, 62, 62, 61, 58]
  },

  "companyB": {

    'sharePrice': [67, 70, 76, 56, 45, 40, 32, 25],
    'volume': [45, 50, 56, 60, 62, 62, 61, 58]
  },

  "companyC": {
    'sharePrice': [67, 70, 76, 56, 45, 40, 32, 25],
    'volume': [45, 50, 56, 60, 62, 62, 61, 58]
  },

  "companyD": {
    'sharePrice': [67, 70, 76, 56, 45, 40, 32, 25],
    'volume': [45, 50, 56, 60, 62, 62, 61, 58]
  },

  "ukInterestRate": [0.67, 0.70, 0.76, 0.56, 0.45, 0.40, 0.32, 0.25],
  "GBPtoUSD": [1.67, 1.70, 1.76, 1.56, 1.45, 1.40, 1.32, 1.25]

}


function makeNoteValues(company, index) {
  var volume = Object.values(testData)[company].volume[index]
  var sharePrice = Object.values(testData)[company].sharePrice[index]

  var currentValues = [volume, sharePrice]

  return currentValues
}







function setup() {
  // create a canvas
  createCanvas(600, 800);

 console.log(makeNoteValues(1, 0))
}

function draw() {
  // colour the background black
  background(0);
  // select white as a colour
  fill(255);
  // draw a rectangle
  rect(150, 150, 100, 100);
}