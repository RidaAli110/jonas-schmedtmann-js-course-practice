'use strict';
// My practice code written while following Jonas Schmedtmann's JavaScript course
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
 console.log(document.querySelector('.guess').value);
 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// message function so i dont have to repeat myself
function displayMessage(message){
  document.querySelector('.message').textContent = message;
}

//check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    displayMessage('🚫 No number');
  }
  // when palyer wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b367';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // when guess is wrong  ---REFACTORED CODE---
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = 
      // guess > secretNumber ? '📈 Too High!' : '📈 Too Low!';
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📈 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    }
    else {
      displayMessage('💥 You lost');
      document.querySelector('.score').textContent = 0;
  };
  }
  });

  //The again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('🚩 Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

  //original code before refactoring
  // // when guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // // when guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

