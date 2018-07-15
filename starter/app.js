/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, activePlayer, currentScore, gamePlaying, roundScore;

activePlayer = 0;
score = [0, 0]

newGame();


function hideDice() {
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
}

function displayDice() {
    document.querySelector('#dice-1').style.display = 'block';
    document.querySelector('#dice-2').style.display = 'block';
}

function getDiceNumber() {
    // debugger;
    if (gamePlaying) {
        var dice1 = Math.floor(Math.random() * (6)) + 1;
        var dice2 = Math.floor(Math.random() * (6)) + 1;

        displayDice();
        $('#dice-1').attr('src', `dice-${dice1}.png`);
        $('#dice-2').attr('src', `dice-${dice2}.png`);

        var currentScore = dice1 + dice2


        if (dice1 !== 1 && dice2 !== 1) {
            roundScore += dice1 + dice2;
            $(`#current-${activePlayer}`).text(currentScore);
        } else {
            nextPlayer();
        }
    }
}

function hold() {
    if (gamePlaying) {
        score[activePlayer] += roundScore;

        $(`#score-${activePlayer}`).text(score[activePlayer]);

        var input = document.querySelector('.final-score').value;
        var winningScore;
        
        if (input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        // Check if player won the game
        if (score[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            hideDice();
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
}
$('.btn-hold').click(hold);


function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    $('#current-0').text(0);
    $('#current-1').text(0);

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    hideDice();
}

function newGame() {
    gamePlaying = true;
    score = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    hideDice();

    $(`.player-current-score`).text(roundScore);
    $(`.player-score`).text(0);
    $('#name-0').text('Player 1');
    $('#name-1').text('Player 2');
}


$('.btn-new').click(newGame);


$('.btn-roll').click(getDiceNumber);
