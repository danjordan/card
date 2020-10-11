#!/usr/bin/env node

const boxen = require("boxen");

let output = `Dan Jordan / danjordan

${"Work:".padStart(12)} Frontend Developer at Mindera
${"Twitter:".padStart(12)} https://twitter.com/danjordan
${"Github:".padStart(12)} https://github.com/danjordan
${"Web:".padStart(12)} https://www.danjordan.dev`;

console.log(
  boxen(output, {
    borderStyle: "bold",
    padding: 1,
  })
);
