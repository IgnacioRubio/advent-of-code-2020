const { debug } = require('console');
const fs = require('fs');

// get input + transfor data
const input = fs.readFileSync('./input.txt', {encoding: 'utf-8'});

const data = input.split('\n');

// call solutions
partOne();
partTwo();

function partOne() {
  // count policy pass
  let countPolyPass = 0;
  
  data.forEach(d =>{
    if (d == '') return;
  
    const policyPass = d.split(' ');
  
    const interval = policyPass[0].split('-');
    const minInter = interval[0];
    const maxInter = interval[1];
    const letter = policyPass[1][0];
    const pass = policyPass[2];
  
    const numLetter = countLetter(letter, pass);
  
    if (numLetter >= minInter && numLetter <= maxInter) countPolyPass++;
  });
  
  console.log(`Number of valid passwords are: ${countPolyPass}`);
}

function partTwo() {
  // count policy pass
  let countPolyPass = 0;
  
  data.forEach(d =>{
    if (d == '') return;
  
    const policyPass = d.split(' ');
  
    const interval = policyPass[0].split('-');
    const minInter = interval[0];
    const maxInter = interval[1];
    const letter = policyPass[1][0];
    const pass = policyPass[2];
  
    if (pass[minInter - 1] == letter && pass[maxInter - 1] != letter || pass[minInter - 1] != letter && pass[maxInter - 1] == letter) countPolyPass++;
  });
  
  console.log(`Number of valid passwords are: ${countPolyPass}`);
}


function countLetter(letter, word) {
  let count = 0;

  for (let w of word) {
    if (w == letter) count++;
  }

  return count;
}