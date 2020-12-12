const fs = require('fs');

// read input + transfor
const input = fs.readFileSync('./input.txt', { encoding: 'utf-8' });

const data = input.split('\n');


// call solutions
partOne();
partTwo();


// PART ONE
function partOne() {
  // needed fields from passaport to be valid
  const FIELD_BYR = 'byr';  // birth day
  const FIELD_IYR = 'iyr';  // issue year
  const FIELD_EYR = 'eyr';  // expiration year
  const FIELD_HGT = 'hgt';  // height
  const FIELD_HCL = 'hcl';  // hair color
  const FIELD_ECL = 'ecl';  // eye color
  const FIELD_PID = 'pid';  // passaport id

  let countPassaportValid = 0;
  let passaport = '';

  // move into data
  for (let i = 0; i < data.length; i++) {
    const line = data[i];
    
    if (line == '') {
      // check passaport valid
      if (passaport.includes(FIELD_BYR) &&
          passaport.includes(FIELD_IYR) &&
          passaport.includes(FIELD_EYR) &&
          passaport.includes(FIELD_HGT) &&
          passaport.includes(FIELD_HCL) &&
          passaport.includes(FIELD_ECL) &&
          passaport.includes(FIELD_PID)) {
            countPassaportValid++;
      }
      
      passaport = ' ';
    }

    passaport += line;
  }
  
  // print result
  console.log(`Number passaports valids: ${countPassaportValid}`);

}


// PART TWO
function partTwo() {
  // needed fields from passaport to be valid
  const FIELD_BYR = 'byr';  // birth day
  const FIELD_IYR = 'iyr';  // issue year
  const FIELD_EYR = 'eyr';  // expiration year
  const FIELD_HGT = 'hgt';  // height
  const FIELD_HCL = 'hcl';  // hair color
  const FIELD_ECL = 'ecl';  // eye color
  const FIELD_PID = 'pid';  // passaport id
  const FIELD_CID = 'cid';  // country id

  let countPassaportValid = 0;
  let passaport = '';

  // move into data
  for (let i = 0; i < data.length; i++) {
    const line = data[i];
    
    if (line == '') {
      let validPassaport = false;

      // split passaport for field
      const passaportSplit = passaport.trim().split(' ');
      
      // check passaport valid with all fields needed
      if (passaport.includes(FIELD_BYR) &&
          passaport.includes(FIELD_IYR) &&
          passaport.includes(FIELD_EYR) &&
          passaport.includes(FIELD_HGT) &&
          passaport.includes(FIELD_HCL) &&
          passaport.includes(FIELD_ECL) &&
          passaport.includes(FIELD_PID)) {
            
            // valid field required
            for (let field of passaportSplit) {
              // check BYR requirements
              if (field.includes(FIELD_BYR) && validByr(field)) {
                validPassaport = true;
              }
              // check IYR requirements
              else if (field.includes(FIELD_IYR) && validIyr(field)) {
                validPassaport = true;
              }
              // check EYR requirements
              else if (field.includes(FIELD_EYR) && validEyr(field)) {
                validPassaport = true;
              }
              // check HGT requirements
              else if (field.includes(FIELD_HGT) && validHgt(field)) {
                validPassaport = true;
              }
              // check HCL requirements
              else if (field.includes(FIELD_HCL) && validHcl(field)) {
                validPassaport = true;
              }
              // check ECL requirements
              else if (field.includes(FIELD_ECL) && validEcl(field)) {
                validPassaport = true;
              }
              // check PID requirements
              else if (field.includes(FIELD_PID) && validPid(field)) {
                validPassaport = true;
              }
              // check CID requirements
              else if (field.includes(FIELD_CID)) {
                validPassaport = true;
              }
              // no found
              else {
                validPassaport = false;
                break;
              }
            };
      
            if (validPassaport) {
              countPassaportValid++;
            }
      }
      
      passaport = '';
    }

    passaport += line + ' ';
  }
  
  // print result
  console.log(`Number passaports valids: ${countPassaportValid}`);

}

function validByr(field) {
  // get value
  const value = parseInt(field.split(':')[1]);
  // test value
  return value >=1920 && value <= 2002;
}

function validIyr(field) {
  // get value
  const value = parseInt(field.split(':')[1]);
  // test value
  return value >=2010 && value <= 2020;
}

function validEyr(field) {
  // get value
  const value = parseInt(field.split(':')[1]);
  // test value
  return value >=2020 && value <= 2030;
}

function validHgt(field) {
  // get value
  const value = parseInt(field.split(':')[1].slice(0, -2));
  // test value
  return field.endsWith('cm') && value >=150 && value <= 193 || field.endsWith('in') && value >=59 && value <= 76;
}

function validHcl(field) {
  // get value
  const value = field.split(':')[1];
  // reg exp
  const rExp = /^#[0-9,a-f]{6}$/;
  // test value
  return rExp.test(value);
}

function validEcl(field) {
  // get value
  const value = field.split(':')[1];
  // reg exp
  const rExp = /(^amb$|^blu$|^brn$|^gry$|^grn$|^hzl$|^oth$)/;
  // test value
  return rExp.test(value);
}

function validPid(field) {
  // get value
  const value = field.split(':')[1];
  // reg exp
  const rExp = /^\d{9}$/;
  // test value
  return rExp.test(value);
}
