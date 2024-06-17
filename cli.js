#!/usr/bin/env node

import boxen from "boxen";

let output = `Dan Jordan / danjordan

${"Work:".padStart(12)} Tech Lead at Mindera
${"Twitter:".padStart(12)} https://twitter.com/danjordan
${"Github:".padStart(12)} https://github.com/danjordan
${"Web:".padStart(12)} https://www.danjordan.dev`;

console.log(
  boxen(output, {
    borderStyle: "bold",
    padding: 1,
  })
);
