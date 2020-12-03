let score = document.querySelector('.score');
let time = document.querySelector('.time');
let startBtn = document.querySelector('.start-btn');
let submitBtn = document.querySelector('.submit-btn');
let questions = document.querySelector('#questions');
let multipleChoice = document.querySelector('#multiple-choice');
let nameStorage = document.querySelector('#name-storage');
let finalScore = document.querySelector('.final-score');

function startGame() {
    let indexPage = document.querySelector('#index-page') = indexPage.setAttribute('class', 'hide');
    console.log(indexPage);
}

startBtn.addEventListener('click', startGame);




