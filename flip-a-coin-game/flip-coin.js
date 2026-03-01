const score = JSON.parse(localStorage.getItem('flipCoinScore')) ||  {
 wins: 0,
 losses: 0,
};

updateScoreElement();

function playGame (playerChoice) {
 const coinImage = document.getElementById('coinImage');
  const resultText = document.getElementById('resultText');

  let coinResult = Math.random();
    let result = '';

    if (coinResult < 0.5) {
     result = 'heads'
     coinImage.src = 'heads.png'
    } else if (coinResult > 0.5) {
        result = 'tails'
        coinImage.src = 'tails.png'
    }
     
     if (playerChoice === result) {
    score.wins += 1;
    resultText.textContent = `Congrats, You win! It was ${result}`;
  } else {
    score.losses += 1;
    resultText.textContent = `oh, try again... You lose! It was ${result}`;
  };

  localStorage.setItem('flipCoinScore', JSON.stringify(score));

  updateScoreElement();
};

function updateScoreElement () {
                 document.getElementById('score').textContent = 
           ` Wins: ${score.wins}, Losses: ${score.losses}`;

};

function resetScore() {
  score.wins = 0;
  score.losses = 0;

  localStorage.setItem('flipCoinScore', JSON.stringify(score));
  updateScoreElement();
  document.getElementById('resultText').textContent = 'Click "Heads" or "Tails" to play!';
};



