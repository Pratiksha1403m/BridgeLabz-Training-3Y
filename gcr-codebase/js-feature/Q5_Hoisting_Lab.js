
"use strict";

console.log("=== Fixed Code ===");

var score = 50;
let status = "ready";

function announce() {
    console.log("Game started");
}

function startGame() {
    console.log(status);
}

console.log(score);
announce();
startGame();

// Arrow functions are expressions and are not
// hoisted like ordinary function declarations.
const announceArrow = () => {
    console.log("Arrow game started");
};

const startGameArrow = () => {
    console.log("Status:", status);
};

announceArrow();
startGameArrow();
