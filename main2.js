
let wordsArray = [];

const input = document.getElementById('input');
const button = document.getElementById('button');
const buttonEnd = document.getElementById('buttonEnd');
const list = document.querySelector('.list');

button.addEventListener('click', () => {
    const word = input.value.trim();
    if (word) {
        wordsArray.push(word);
        console.log(wordsArray);
        input.value = '';
    }
});

buttonEnd.addEventListener('click', () => {
    list.innerHTML = "";
    const resultString = wordsArray.join(' ');
    const blockText = document.createElement('h1');
    blockText.classList.add('block_text');
    blockText.textContent = resultString;
    list.append(blockText);
});
