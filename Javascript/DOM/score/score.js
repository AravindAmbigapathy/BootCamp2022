const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2display')
}

const resetButton = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#playto')
let winninSscore = 5;
let isGameOver = false;

function updateScores(player, oppomnent) {
    if (!isGameOver) {
        player.score += 1
        if (player.score === winninSscore) {
            isGameOver = true
            player.display.classList.add('has-text-success')
            oppomnent.display.classList.add('has-text-danger')
            player.button.disabled = true;
            oppomnent.button.disabled = true;
        }
        player.display.textContent = player.score
    }
}



p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)

})

winningScoreSelect.addEventListener('change', function () {
    winninSscore = parseInt(this.value);
    reset()
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0
        p.display.textContent = 0
        p.display.classList.remove('has-text-success', 'has-text-danger')
        p.button.disabled = false;
    }
}