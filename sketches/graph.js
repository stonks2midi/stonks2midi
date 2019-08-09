const LEGEND_COLOURS = [
    [255, 114, 107],
    [255, 211, 107],
    [107, 255, 139],
    [107, 186, 255]
];

const BACKGROUND_COLOUR = [1, 29, 54];
const GUIDE_COLOUR = [10, 37, 61];

const TIP_BACKGROUND_COLOUR = [1, 18, 33];
const TIP_TEXT_COLOUR = [255, 255, 255];

const HISTORY_LENGTH = Math.floor(window.innerWidth / 28);
const MAXIMUM_VALUE = 28;
const BOTTOM_PADDING = 20;

const INFO_COLOUR = [145, 183, 217];
const READOUT_COLOUR = [255, 255, 255];

const PROGRESS_BAR_BACKGROUND_COLOUR = [237, 237, 237];
const PROGRESS_BAR_FOREGROUND_COLOUR = [107, 186, 255];

var testDataDisplay = [];
var data = [];
var companyNames = [];
var displaySharePrice = [];
var displayVolume = [];
var displayDate = [];
var progress = 0;
var maxProgress = 1;

var systemFont;

function getMean(array) {
    return array.reduce(function (previous, current) {
        return previous + current;
    }, 0) / array.length;
}

function preload() {
    systemFont = loadFont("media/Source Sans Pro.otf");
}

function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);

    canvas.parent("graphCanvas");
    rectMode(CENTER);
}

function draw() {
    textFont(systemFont);

    background(...BACKGROUND_COLOUR);

    var scaleX = window.innerWidth / HISTORY_LENGTH;
    var scaleY = window.innerHeight / MAXIMUM_VALUE;

    stroke(...GUIDE_COLOUR);
    strokeWeight(2);

    for (var x = 0; x < HISTORY_LENGTH; x++) {
        line(scaleX * x, 0, scaleX * x, window.innerHeight);
    }

    for (var y = 0; y < MAXIMUM_VALUE; y++) {
        line(0, window.innerHeight - ((scaleY * y) + BOTTOM_PADDING), window.innerWidth, window.innerHeight - ((scaleY * y) + BOTTOM_PADDING));
    }

    strokeWeight(5);

    for (var l = 0; l < data.length; l++) {
        stroke(...LEGEND_COLOURS[l]);

        for (var i = 0; i < HISTORY_LENGTH; i++) {
            line(scaleX * i, window.innerHeight - (scaleY * data[l][i]) - BOTTOM_PADDING, scaleX * (i + 1), window.innerHeight - (scaleY * data[l][i + 1]) - BOTTOM_PADDING);

            previousData = data[i];
        }
    }

    textSize(16);
    noStroke();

    for (var l = 0; l < data.length; l++) {
        var label = companyNames[l] + ": £" + parseFloat(Math.round(displaySharePrice[l] * 100) / 100).toFixed(2) + " (" + displayDate[l] + ")";

        fill(
            Math.min(LEGEND_COLOURS[l][0] + 50, 255),
            Math.min(LEGEND_COLOURS[l][1] + 50, 255),
            Math.min(LEGEND_COLOURS[l][2] + 50, 255)
        );

        ellipseMode(CENTER);
        ellipse(scaleX * (HISTORY_LENGTH - 1), window.innerHeight - (scaleY * data[l][HISTORY_LENGTH - 1]) - BOTTOM_PADDING, 15, 15);

        rectMode(CORNER);
        fill(...TIP_BACKGROUND_COLOUR);
        rect((scaleX * (HISTORY_LENGTH - 1)) - textWidth(label) - 15, window.innerHeight - (scaleY * data[l][HISTORY_LENGTH - 1]) - BOTTOM_PADDING + 2, textWidth(label) + 10, 20, 5);

        fill(...TIP_TEXT_COLOUR);
        text(label, (scaleX * (HISTORY_LENGTH - 1)) - textWidth(label) - 10, window.innerHeight - (scaleY * data[l][HISTORY_LENGTH - 1]) - BOTTOM_PADDING + 2, textWidth(label) + 10, 20)
    }

    if (displaySharePrice.length > 0) {
        fill(...INFO_COLOUR);
        noStroke();
        textSize(20);
        text("Mean share price".toUpperCase(), 20, 50);

        fill(...READOUT_COLOUR);
        textSize(50);
        text("£" + parseFloat(Math.round(getMean(displaySharePrice) * 100) / 100).toFixed(2), 20, 100);

        var pushWidth = textWidth("£" + parseFloat(Math.round(getMean(displaySharePrice) * 100) / 100).toFixed(2));

        if (20 + Math.max(pushWidth) + 50 + textWidth(String(Math.round(getMean(displayVolume)))) < window.innerWidth) {
            fill(...INFO_COLOUR);
            noStroke();
            textSize(20);
            text("Mean volume".toUpperCase(), Math.max(160, pushWidth) + 50, 50);

            fill(...READOUT_COLOUR);
            textSize(50);
            text(Math.round(getMean(displayVolume)), Math.max(160, pushWidth) + 50, 100);

            strokeWeight(10);

            stroke(...PROGRESS_BAR_BACKGROUND_COLOUR);
            line((window.innerWidth / 2) - 100, 20, (window.innerWidth / 2) + 100, 20);

            stroke(...PROGRESS_BAR_FOREGROUND_COLOUR);
            line((window.innerWidth / 2) - 100, 20, (window.innerWidth / 2) - 100 + ((progress / maxProgress) * 200), 20);
        }
    }
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}

function updateGraph(height, legend, name, index, maxIndex) {
    if (data[legend] == undefined) {
        data[legend] = new Array(HISTORY_LENGTH).fill(0);
    }

    if (displaySharePrice[legend] == undefined) {
        displaySharePrice[legend] = [];
    }

    if (displayVolume[legend] == undefined) {
        displayVolume[legend] = [];
    }

    if (companyNames[legend] == undefined) {
        companyNames[legend] = name;
    }

    data[legend].push(height);
    data[legend].shift();

    displaySharePrice[legend] = testDataDisplay[name]["sharePrice"][index];
    displayVolume[legend] = testDataDisplay[name]["volume"][index];
    displayDate[legend] = testDataDisplay[name]["dates"][testDataDisplay[name]["dates"].length - 1 - index];

    progress = index;
    maxProgress = maxIndex;
}