const words = 'A fascinating aspect of human life is the capacity for creativity. Throughout history, people have demonstrated their ability to invent, imagine, and explore new possibilities. From art to science, human innovation knows no bounds. In particular, technological advancements have drastically changed the way we live, communicate, and interact with the world. Inventions such as the internet, smartphones, and artificial intelligence have revolutionized every facet of modern society, allowing us to connect with others across the globe in real time and access an unprecedented amount of information. At the same time, creative expression through literature, music, and visual arts continues to evolve, shaping cultures and ideas. The drive to create and improve is deeply embedded in our nature, pushing us to constantly search for better solutions to everyday challenges.'.split(' ');
const wordsCount = words.length;

function randomWord() {
  const randomIndex = Math.floor(Math.random() * wordsCount);
  return words[randomIndex];
}

function formatWord(word) {
  return `<div class="word">
    <span class="letter">
      ${word.split('').join('</span><span class="letter">')}
    </span>
  </div>`;
}

function newGame() {
  console.log('new game start');
  document.getElementById('words').innerHTML = '';

  for (let i = 0; i < 200; i++) {
    document.getElementById('words').innerHTML += formatWord(randomWord());

  }
}

document.getElementById('game').addEventListener('keyup', ev => {
  const key = ev.key;
});

newGame();

