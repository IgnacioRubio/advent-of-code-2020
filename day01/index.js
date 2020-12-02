const fs = require('fs');

// read input + tranfor
const input = fs.readFileSync('./input.txt', { encoding: 'utf-8' });

const data = input.split('\n').map(x => parseInt(x));


getTwoEntriesMultiple();
getThreeEntriesMultiple();


function getTwoEntriesMultiple() {
  let num1 = 0;
  let num2 = 0;

  let i = 0;
  let foundNumbers = false;

  do {
    let j = 0;
    num1 = data[i];
    
    do {
      if ( i !== j) {
        num2 = data[j];
    
        foundNumbers = num1 + num2 == 2020;
      }

      j++;
    } while (j < data.length && !foundNumbers);
    

    i++;
  } while (i < data.length && !foundNumbers);


  console.log(`${num1} * ${num2} = ${num1 * num2}`);
}


function getThreeEntriesMultiple() {
  let num1 = 0;
  let num2 = 0;
  let num3 = 0;

  let i = 0;
  let foundNumbers = false;

  do {
    let j = 0;
    num1 = data[i];
    
    do {
      if ( i !== j) {
        let k = 0;

        num2 = data[j];
    
        do {
          if (j !== k) {
            num3 = data[k];
        
            foundNumbers = num1 + num2 + num3 == 2020;
          }
    
          k++;
        } while (k < data.length && !foundNumbers);

      }

      j++;
    } while (j < data.length && !foundNumbers);
    

    i++;
  } while (i < data.length && !foundNumbers);


  console.log(`${num1} * ${num2} * ${num3} = ${num1 * num2 * num3}`);
}