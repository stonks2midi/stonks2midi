import {start} from "./sketches/sketch.js";

document.getElementById("starterButton").addEventListener("click", function() {
    start();

    document.getElementById("restartButton").style.display = "unset";
    document.getElementById("restartButton").style.opacity = 1;
    
    document.getElementById("starterDialog").style.opacity = 0;
    document.getElementById("starterButton").style.opacity = 0;

    setTimeout(function() {
        document.getElementById("starterDialog").style.display = "none";
        document.getElementById("starterButton").style.display = "none";
    }, 500);
});

document.getElementById("restartButton").addEventListener("click", function() {
    window.location.reload();
});