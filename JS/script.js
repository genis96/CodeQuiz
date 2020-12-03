let score = document.querySelector('.score');
let time = document.querySelector('.time');
let startBtn = document.querySelector('.start-btn');
let submitBtn = document.querySelector('.submit-btn');
let questions = document.querySelector('#questions');
let multipleChoice = document.querySelector('#multiple-choice');
let nameStorage = document.querySelector('#name-storage');
let finalScore = document.querySelector('.final-score');

let currQuestion = 0;
score = 0;
let timeLeft = 80;

function startGame() {
    let indexPage = document.querySelector('#index-page');
    indexPage.setAttribute('class', 'hide');
    questions.removeAttribute('class');

    timer.setInterval(tikTokClock, 1000);
    time.textContent = timingQuestions;

    questionGrabbing();

    console.log(indexPage);
}

function questionGrabbing() {

}

function highScoreTracker() {}

startBtn.addEventListener('click', startGame);
submitBtn.addEventListener('click', highScoreTracker);




