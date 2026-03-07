    const autoPlayButton = document.querySelector('.auto-play-button');
    
    const score = {
                wins: 0,
                losses: 0,
                ties:0
            };

         updateScoreElement();

         function resetGame() {
            score.wins = 0;
            score.losses = 0;
            score.ties = 0;
            updateScoreElement();

            document.querySelector('.js-moves').innerHTML = '';
          }
          
          let isAutoPlaying = false;
          let intervalId;

        function autoPlay() {
            
            if (!isAutoPlaying) {
                intervalId = setInterval(() => {
                     const playerMove = pickComputerMove();
                     playGame(playerMove);
                }, 1050);
                isAutoPlaying = true;
                autoPlayButton.innerHTML = 'Stop Auto Play';
            } else {
                clearInterval(intervalId);
                isAutoPlaying = false;
                autoPlayButton.innerHTML = 'Auto Play';
            }
        };
         
         
     
        document.querySelector('.js-move-rock-btn').addEventListener('click', () => {
            playGame('rock');
        });

         

        document.querySelector('.js-move-paper-btn').addEventListener('click', () => {
            playGame('paper');
        });

     

        document.querySelector('.js-move-scissors-btn').addEventListener('click', () => {
            playGame('scissors');
        });

        function playGame(playerMove) {
         const computerMove = pickComputerMove();
            
            let result = '';

             if (playerMove === 'scissors') {
            if (computerMove === 'rock') {
                result = 'You lose.';
            } else if (computerMove === 'paper') 
            { result = 'You win.'; } else if (computerMove === 'scissors') { result = 'Tie.'; }
             }else if (playerMove === 'paper') {
                if (computerMove === 'rock') {
                    result = 'You win.';
                } else if (computerMove === 'paper') { result = 'Tie.'; } 
                else if (computerMove === 'scissors') { result = 'You lose.'; }
            } else if(playerMove === 'rock') {
            if (computerMove === 'rock') {
                result = 'Tie.';
            } else if (computerMove === 'paper') { result = 'You lose.'; 

            } else if (computerMove === 'scissors') { result = 'You win.'; }
        } 
           if (result === 'You win.') { score.wins += 1;
            } else if (result === 'You lose.') { score.losses += 1; 

            } else if (result === 'Tie.') {
                score.ties += 1;
            }
            updateScoreElement();
            
         document.querySelector('.js-result').innerHTML = result;

         document.querySelector('.js-moves').innerHTML 
            = `You choose:
         <img src="${playerMove}-emoji.png" 
         class="move-icon">
         <img src="${computerMove}-emoji.png" 
         class="move-icon">
          Computer's choice`;
        }
             
             function updateScoreElement () {
                 document.querySelector('.js-score').innerHTML = 
           ` Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
             }

            function pickComputerMove() {
                
                const randomNumber = Math.random();

                let computerMove = '';

                if (randomNumber >= 0 && randomNumber < 1 / 3) { computerMove = 'rock';}
                else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
                    computerMove = 'paper';
                } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
                    computerMove = 'scissors';
                } 

              return computerMove;
            }

            const resetButton = document.querySelector('.js-reset-btn');
            const confirmBox = document.querySelector('.js-confirm-reset');
            const confirmYes = document.querySelector('.js-confirm-yes');
            const confirmNo = document.querySelector('.js-confirm-no');

            resetButton.addEventListener('click', () => {
            confirmBox.style.display = 'block';
            });

            confirmYes.addEventListener('click', () => {
            resetGame();
            confirmBox.style.display = 'none';
            });

            confirmNo.addEventListener('click', () => {
            confirmBox.style.display = 'none';
            });