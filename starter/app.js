/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var player, score, activePlayer, currentScore, dice;

player = ['0', '0'];
score = 0;
currentScore = 0;
activePlayer = 0;


hideDice();


function hideDice() {
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
}

function displayDice() {
    document.querySelector('#dice-1').style.display = 'block';
    document.querySelector('#dice-2').style.display = 'block';
}

function getDiceNumber() {

    x = Math.floor(Math.random() * (6)) + 1;
    y = Math.floor(Math.random() * (6)) + 1;

    dice = [];
    displayDice();
    dice[0] = $('#dice-1').attr('src', `dice-${x}.png`);
    dice[1] = $('#dice-2').attr('src', `dice-${y}.png`);
    currentScore = x + y;


    if (x !== 1 && y !== 1) {
        score += currentScore;
        $(`#score-${activePlayer}`).text(score);
        $(`#current-${activePlayer}`).text(currentScore);

    } else {
        nextPlayer();

    }
}


function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

function newGame() {
    hideDice();

    currentScore = 0;
    score = 0;
    $(`#current-${activePlayer}`).text(currentScore);
    $(`#score-${activePlayer}`).text(score);
    $('#name-0').text('Player 1');
    $('#name-1').text('Player 2');
}

function hold() {
    hideDice();
    currentScore = 0;
    $('.player-current-score').text(currentScore);
}

$('.btn-new').click(nextPlayer);

$('.btn-hold').click(hold);

$('.btn-roll').click(getDiceNumber);