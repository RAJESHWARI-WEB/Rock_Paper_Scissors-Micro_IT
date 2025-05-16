const choices = document.querySelectorAll('.choice');
const playerChoiceText = document.getElementById('playerChoice');
const computerChoiceText = document.getElementById('computerChoice');
const winnerText = document.getElementById('winner');

const CHOICES = ['rock', 'paper', 'scissors'];

choices.forEach(button => {
  button.addEventListener('click', () => {
    const player = button.dataset.choice;
    const computer = getComputerChoice();
    const winner = getWinner(player, computer);
    updateDisplay(player, computer, winner);
  });
});

function getComputerChoice() {
  const index = Math.floor(Math.random() * 3);
  return CHOICES[index];
}

function getWinner(player, computer) {
  if (player === computer) return 'draw';
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'paper') ||
    (player === 'paper' && computer === 'rock')
  ) return 'player';
  return 'computer';
}

function updateDisplay(player, computer, winner) {
  playerChoiceText.textContent = `You: ${formatChoice(player)}`;
  computerChoiceText.textContent = `Computer: ${formatChoice(computer)}`;
  if (winner === 'draw') {
    winnerText.textContent = "It's a Draw!";
  } else if (winner === 'player') {
    winnerText.textContent = "You Win! 🎉";
  } else {
    winnerText.textContent = "Computer Wins 😔";
  }
}

function formatChoice(choice) {
  switch (choice) {
    case 'rock': return '✊ Rock';
    case 'paper': return '✋ Paper';
    case 'scissors': return '✌️ Scissors';
  }
}
