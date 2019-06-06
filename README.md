## P5 First Project Step by Step guide
---

Here are some steps to help you build a simple p5 sketch like the one on the front page of <https://www.untangled.org.uk>

They don't tell you exactly how to do it, but they help you break down a complex task into acheivable steps. Practice your `git skills` by doing a `git commit` after each step. 

### The Steps

1. set up git account?
1. git clone this repo
1. open project in your code editor
1. run the project in your browser (instructions below) - you should see a white rectangle on a black background
1. add a white circle
1. change the background to white and the shapes to black
1. change the shapes to be coloured randomly when the page loads
1. make the circle move in a straight line
1. make the rectangle move in a diagonal line
1. make both shapes bounce off the edges of the screen
1. make both shapes move randomly around the screen
1. remove the rectangle
1. render 5 of circles with the same behaviour as the first
1. render a random number of circles
1. make the circles attract each other
1. turn the circles in to hexagons
1. make the hexagons make a sound when they bounce off the screen edges
1. make the the big hexagons make a low pitched sound and smaller ones make a high pitched sound
1. make the hexagons repel each other after while

### To run the Project

In your terminal window type:

```
git clone git@github.com:neontribe/untangled-template.git
cd untangled-template
npm install
npm run dev
```
The last command will start [browser-sync](https://browsersync.io/) which will allow you to run the project in your browser. Your terminal will tell you the address of your sketch, it will look something like this:
```
[Browsersync] Access URLs:
 ---------------------------------------
       Local: http://localhost:3000
```
Your browser should open your sketch in a new tab automatically. If for any reason the window closes, copy and paste this address into your broswer and you should see your sketch.

If a window opens, but you don't see your sketch, hit f12 or right-click and select 'inspect' in your browser window and look for error messages in your console.

---
### To add a library

You can find libraries that work with p5.js [here](https://p5js.org/libraries/)

Of course you can install any other library you like like [Tone.js](https://tonejs.github.io/) or [Matter](http://brm.io/matter-js/)

You can do this either by importing the library files directly into your project or by installing via [NPM](https://www.npmjs.com/)

### Working with audio

If you are using audio, you might get a message in your dev tools console (f12) that looks something like this:

```
Context.js:15 The AudioContext was not allowed to start. It must be resumed (or created) after a user gesture on the page. https://goo.gl/7K7WLu
```
A simple way around this is to install [unmute](https://www.npmjs.com/package/unmute) using
```
npm install unmute
```

Add a mute button to your sketch by including the following lines of code at the top of your sketch js file:
```
import UnmuteButton from 'unmute'

UnmuteButton()
````
