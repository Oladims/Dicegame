/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
document.querySelector('#dice-1').style.display = 'none';
document.querySelector('#dice-2').style.display = 'none';


var player, score, currentScore, dice;

player = ['0', '0'];
score = 0;
currentScore = 0;

$('.btn-new').click(newGame);

$('.btn-roll').click(getDiceNumber);

function game() {
    if (gamePlaying) {
        
    }
}

function getDiceNumber() {
    document.querySelector('#dice-1').style.display = 'block';
    document.querySelector('#dice-2').style.display = 'block';

    x = Math.floor(Math.random() * (6)) + 1;
    y = Math.floor(Math.random() * (6)) + 1;

    currentScore = x + y;
    score += currentScore;

    $('.player-current-score').text(currentScore);
    $('.player-score').text(score);

    dice = [];
    dice[0] = $('#dice-1').attr('src', `dice-${x}.png`);
    dice[1] = $('#dice-2').attr('src', `dice-${y}.png`);
    return dice;
}

function newGame() {
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';

    currentScore = 0;
    score = 0;
    $('.player-current-score').text(currentScore);
    $('.player-score').text(score);
    $('#name-0').text('Player 1');
    $('#name-1').text('Player 2');
}
