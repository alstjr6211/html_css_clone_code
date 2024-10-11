const words = 'daksjpasdasdasdkasjld0'.split(' ');
const wordsCount = words.length;

function randomWord() {
  const randomIndex = Math.floor(Math.random() * wordsCount);
  return words[randomIndex];
}

function newGame() {
  console.log('new game start');
  document.getElementById('words').innerHTML = '';

  for (let i = 0; i < 200; i++) {
    document.getElementById('words').innerHTML += randomWord();

  }
}

newGame();