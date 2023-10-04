const column1 = document.getElementById('column1');
const column2 = document.getElementById('column2');

function addScore(column, playerName, score) {
    const scoreDiv = document.createElement('div');
    scoreDiv.className = 'score';
    scoreDiv.innerHTML = `<p>${playerName}: ${score}</p>`;
    column.appendChild(scoreDiv);
    updateScorePosition(column);
}

function updateScorePosition(column) {
    const scores = Array.from(column.querySelectorAll('.score'));
    scores.sort((a, b) => {
        const scoreA = parseInt(a.innerText.split(': ')[1]);
        const scoreB = parseInt(b.innerText.split(': ')[1]);
        return scoreB - scoreA;
    });
    scores.forEach((score, index) => {
        score.style.marginTop = `${index * 60}px`;
    });
}

// Example usage:
addScore(column1, 'Player 1', 50);
addScore(column1, 'Player 2', 75);
addScore(column1, 'Player 3', 60);
addScore(column2, 'Player 4', 90);
addScore(column2, 'Player 5', 70);
addScore(column2, 'Player 6', 85);
