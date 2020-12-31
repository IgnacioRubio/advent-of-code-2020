const fs = require('fs');

// read input + transfor
const input = fs.readFileSync('./input.txt', { encoding: 'utf-8' });

const data = input.split('\n');

// call solutions
partOne();
partTwo();


// PART ONE
function partOne() { 
  let seatIdMax = 0;

  const decoWeight = [64, 32, 16, 8, 4, 2, 1, 4, 2, 1];

  // walk through boarding passes
  for (let i = 0; i < data.length - 1; i++) {
    let rowMin = 0;
    let rowMax = 127;

    let colMin = 0;
    let colMax = 7;

    const boardPass = data[i];

    // walk through letters
    for (let j = 0; j < boardPass.length; j++) {
      switch (boardPass[j]) {
        case 'F': // lower row
          rowMax = rowMax - decoWeight[j];
          break;
        case 'B': // upper row
          rowMin = rowMax - decoWeight[j] + 1;
          break;
        case 'L': // lower col
          colMax = colMax - decoWeight[j];
          break;
        default:  // upper col
          colMin = colMax - decoWeight[j] + 1;
          break;
      }
    }

    const seatId = rowMax * 8 + colMax;

    if (seatId > seatIdMax) seatIdMax = seatId;

  }

  console.log(`Highest seat ID is ${seatIdMax}`);


}

// PART ONE
function partTwo() {
  let seatIds = [];

  const decoWeight = [64, 32, 16, 8, 4, 2, 1, 4, 2, 1];

  // walk through boarding passes
  for (let i = 0; i < data.length - 1; i++) {
    let rowMin = 0;
    let rowMax = 127;

    let colMin = 0;
    let colMax = 7;

    const boardPass = data[i];

    // walk through letters
    for (let j = 0; j < boardPass.length; j++) {
      switch (boardPass[j]) {
        case 'F': // lower row
          rowMax = rowMax - decoWeight[j];
          break;
        case 'B': // upper row
          rowMin = rowMax - decoWeight[j] + 1;
          break;
        case 'L': // lower col
          colMax = colMax - decoWeight[j];
          break;
        default:  // upper col
          colMin = colMax - decoWeight[j] + 1;
          break;
      }
    }

    // calculated id
    const seatId = rowMax * 8 + colMax;

    // saved them
    seatIds.push(seatId);
  }

  // order seat id asc
  seatIds.sort((a, b) => { return a - b });

  // check missing id from list
  let missingSeatId;

  let compareSeatId = seatIds[0];

  let i = 1;

  while (i < seatIds.length && missingSeatId === undefined) {
    compareSeatId += 1;

    if (compareSeatId !== seatIds[i]) missingSeatId = compareSeatId;

    i++;
  }

  console.log(`Missing seat id is ${missingSeatId}`);
}