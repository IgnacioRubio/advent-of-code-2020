const fs = require('fs');

// read input + transfor
const input = fs.readFileSync('./input.txt', { encoding: 'utf-8' });

const data = input.split('\n');

// call solutions
// partOne();
partTwo();


// PART ONE
function partOne() {
  let yesAnswerAcc = 0;

  let groupAnswers = '';

  for (let i = 0; i < data.length; i++) {
    // check new line = new group
    if (data[i] === '') {
      groupAnswers = '';
    }

    let j = 0;
    let answers = data[i];

    while (j < answers.length && data[i] !== '') {
      if (!groupAnswers.includes(answers[j])) {
        groupAnswers += answers[j];

        yesAnswerAcc++;
      }

      j++;
    }
  }

  console.log(`Answers yes different from all groups: ${yesAnswerAcc}`);
}


// PART TWO
function partTwo() {
  let yesAnswerAcc = 0;

  let groupAnswers = data[0];

  for (let i = 1; i < data.length; i++) {
    // check new line = new group
    if (data[i] === '') {
      yesAnswerAcc += groupAnswers.length;

      // take first answers
      groupAnswers = data[i + 1];

      console.log();
    }

    let j = 0;
    let answers = data[i];
    let tmpAns = '';

    while (j < answers.length && data[i] !== '') {
      // dismiss answers
      if (groupAnswers.includes(answers[j])) tmpAns += answers[j];

      j++;
    }

    if (data[i] !== '') groupAnswers = tmpAns;
  }

  console.log(`Answers yes equal from every group: ${yesAnswerAcc}`);
}
