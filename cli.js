#!/usr/bin/env node

const boxen = require("boxen");
const leftPad = require("left-pad");

let output = `Dan Jordan / danjordan

${leftPad("Work:", 12)}  Frontend Developer at Mindera
${leftPad("Twitter:", 12)}  https://twitter.com/danjordan
${leftPad("Github:", 12)}  https://github.com/danjordan
${leftPad("Web:", 12)}  https://dan-jordan.co.uk`;

console.log(
  boxen(output, {
    borderStyle: "round",
    padding: 1
  })
);
