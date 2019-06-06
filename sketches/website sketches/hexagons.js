let angle = 0.0;
let hexagons = [];
let colours = ['#fb37f1', '#54fcfd', '#9013fe', '#48e6b6', '#fdf958'];
let notes = ['C2', 'G2', 'C3', 'D3', 'E3', 'G3', 'C5', 'F5', 'A5', 'C6'];
let numberOfHexagons

let polySynth = new Tone.PolySynth(15, Tone.Synth).toMaster();

function startAudio() {
  Tone.context.resume();
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

class HexAgent {
  constructor(posX, posY, fillColor) {
    this.mousePos = createVector(mouseX, mouseY);
    this.size = random(windowWidth / 15) + 15;
    this.fillColor = fillColor;
    this.pos = createVector(posX, posY);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.relationshipLength = random(25000) + 10000; // milliseconds
    this.feelings = ['attracted', 'repulsed'];
    this.currentFeeling = this.feelings[0];
    this.note =
      notes[Math.floor(map(this.size, 15, windowWidth / 15 + 15, 9, 0))];
    this.synth = polySynth;

  }

  display() {
    noStroke();
    fill(this.fillColor);
    polygon(this.pos.x, this.pos.y, this.size, 6);
  }

  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
  }

  checkBoundaries() {
    if (this.pos.x >= windowWidth - this.size || this.pos.x <= 0 + this.size) {
      this.vel.x = this.vel.x * -1;
      this.synth.triggerAttackRelease(this.note, '8n');
    }
    if (
      this.pos.y >= windowHeight - this.size * 0.85 ||
      this.pos.y <= 0 + this.size * 0.85
    ) {
      this.vel.y = this.vel.y * -1;
      this.synth.triggerAttackRelease(this.note, '8n');
    }
  }

  attracted(target, gravity) {
    let force = p5.Vector.sub(target.pos, this.pos);
    let distSquared = force.magSq();
    distSquared = constrain(distSquared, 5, 900);
    let strength = gravity / distSquared;
    force.setMag(strength);
    switch (this.currentFeeling) {
      case 'attracted':
        force = force;
        break;
      case 'repulsed':
        force.mult(-1);
        break;
    }
    this.acc = force;
  }

  changeState() {
    this.acc = createVector(0, 0);
    this.vel = createVector(0.1, 0.1);
    switch (this.currentFeeling) {
      case 'attracted':
        this.currentFeeling = this.feelings[1];
        break;
      case 'repulsed':
        this.currentFeeling = this.feelings[0];
        break;
    }
  }

  checkRelationshipStatus() {
    if (millis() > this.relationshipLength) {
      this.relationshipLength = this.relationshipLength + millis();
      this.changeState();
    }
  }
}

// function preload() {
//   weather = loadJSON('https://api.openweathermap.org/data/2.5/weather?q=newyork&APPID=af2b9cf608567e0f30745c0bcc877730&units=imperial');
// }

function setup() {
  numberOfHexagons = map(windowWidth, 375, 1920, 6, 15);
  polySynth.set('envelope', {
    attack: 0.1,
    decay: 0.8,
    sustain: 0.6,
    release: 4
  });
  polySynth.set('volume', -6);

  var myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.class('backgroundsketch');
  document.body.prepend(myCanvas.canvas);
  startAudio();
  for (var i = 0; i < numberOfHexagons; i++) {
    hexagons.push(
      new HexAgent(
        random(windowWidth * 0.1, windowWidth * 0.9),
        random(windowHeight * 0.1, windowHeight * 0.9),
        random(colours)
      )
    );
  }
}

function draw() {
  background(255);

  for (var i = 0; i < numberOfHexagons; i++) {
    hexagons[i].attracted(hexagons[hexagons.length - 1 - i], 8);
    hexagons[i].update();
    hexagons[i].display();
    hexagons[i].checkBoundaries();
    hexagons[i].checkRelationshipStatus();
  }
}
