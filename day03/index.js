const fs = require('fs');

// read input + transfor
const input = fs.readFileSync('./input.txt', { encoding: 'utf-8' });

const data = input.split('\n');


// call solutions
partOne(1, 3);
partTwo();


// PART ONE
function partOne(movV, movH) {
  const SYMBOL_OPEN = '.';
  const SYMBOL_TREE = '#';

  const numSquaresLine = data[0].length;
  let countTrees = 0;

  const MOV_VERTICAL = movV;
  const MOV_HORIZONTAL = movH;

  
  let posHorizontal = 0;

  for (let posVertical = movV; posVertical < data.length - 1; posVertical += MOV_VERTICAL) {
    // move into  the map
    posHorizontal += MOV_HORIZONTAL;

    // check horizontal limit
    if (posHorizontal >= numSquaresLine) {
      posHorizontal = posHorizontal - numSquaresLine;
    }
  
    // check tree encounter
    if (data[posVertical][posHorizontal] == SYMBOL_TREE ) countTrees++;
  }

  // print result
  console.log(`Number trees encountred: ${countTrees}`);

  return countTrees;
}


// PART TWO
function partTwo() {
  const trees1 = partOne(1, 1);
  const trees2 = partOne(1, 3);
  const trees3 = partOne(1, 5);
  const trees4 = partOne(1, 7);
  const trees5 = partOne(2, 1);

  console.log(`Trees: ${trees1}, ${trees2}, ${trees3}, ${trees4} & ${trees5}`);
  console.log(`Multiple results = ${trees1 * trees2 * trees3 * trees4 * trees5}`);
}