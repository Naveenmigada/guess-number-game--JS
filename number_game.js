document.addEventListener('DOMContentLoaded', () => {
    const x = Math.floor(Math.random() * 100);
    let attempts = 0;

    const feedback = document.getElementById('feedback');
    const score = document.getElementById('score');
    const congratulations = document.getElementById('congratulations');

    const updateFeedback = (message) => {
        feedback.textContent = message;
    };

    const updateScore = () => {
        score.textContent = `Attempts: ${attempts}`;
    };

    const handleGuess = () => {
        const input = document.getElementById('guessInput');
        const guess = parseInt(input.value, 10);

        if (isNaN(guess)) {
            updateFeedback('Please enter a valid number.');
            return;
        }

        attempts += 1;

        if (guess < x) {
            updateFeedback(`${guess} is  low!`);
        } else if (guess > x) {
            updateFeedback(`${guess} is high!`);
        } else {
            updateFeedback('Congratulations! You guessed the number!');
            congratulations.textContent = `Amazing job! You found the number in ${attempts} attempts.`;
            document.getElementById('submitGuess').disabled = true;
        }

        updateScore();
        input.value = '';
        input.focus();
    };

    document.getElementById('submitGuess').addEventListener('click', handleGuess);

    document.getElementById('guessInput').addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleGuess();
        }
    });
});
