var timerElement = document.querySelector("#timer-count");
const rsBtn = document.querySelector(".reset-button");
const startBtn = document.querySelector(".start-button");
var currentQuestion = document.querySelector("#question")
var gameScore = document.querySelector(".current-score")
let answers = document.getElementById('answers');

var questionIndex = 0
let timerCount
const questionsArray = [
    {
        question: "Covid common symptoms include...",
        answers: [
            {choice: "Fever or chills, Cough, shortness of breath or difficulty breathing"},
            {choice: "Fatigue, muscle or body aches, headache"},
            {choice: "New loss of taste or smell, sore throat, congestion or runny nose"},
            {choice: "All the above"}
        ],
        correct: "All the above"
    },
    {
        question: "The main ways to help stop the spread of COVID-19:",
        answers: [
            {choice: "Being in close proximity to an infected person and breathing in the particles containing the virus"},
            {choice: "Keeping at least a six-foot distance from other people"},
            {choice: "Sharing food or drinks with your friends"},
            {choice: "Touching eyes, nose, or mouth with hands that have the virus on them."}
        ],
        correct: "Keeping at least a six-foot distance from other people"
    },
    {
        question: "Which of the following methods will NOT help to protect yourself & others from getting Covid?",
        answers: [
            {choice: "Wear a mask and stay 6-feet away from others"},
            {choice: "Covering coughs & sneezes and wash your hands often"},
            {choice: "Going out and about on your daily routine when infected"},
            {choice: "Avoiding crowds and poorly ventilated spaces"}
        ],
        correct: "Going out and about on your daily routine when infected"
    },
    {
        question: "Who should get Covid tested?",
        answers: [
            {choice: "People who have symptoms of COVID-19"},
            {choice: "People who have had a known exposure to someone with suspected or confirmed COVID-19."},
            {choice: "People not fully vaccinated with COVID-19 vaccine who are prioritized for expanded community screening"},
            {choice: "All of the above"}
        ],
        correct: "All of the above"
    },
    {
        question: "What NOT to do if you are sick",
        answers: [
            {choice: "Wear a mask over your nose and mouth."},
            {choice: "Separate yourself from other people and wash your hands often"},
            {choice: "Take a bus to the hospital for medical care without any appointment"},
            {choice: "Avoid sharing personal household items and clean all 'high-touch' surfaces everyday."}
        ],
        correct: "Take a bus to the hospital for medical care without any appointment"
    },
    {
        question: "Who is NOT at increased risk for severe illness?",
        answers: [
            {choice: "Teenagers"},
            {choice: "Older adults"},
            {choice: "Pregnant and recently pregnant people"},
            {choice: "People with medical conditions"}
        ],
        correct: "Teenagers"
    },
    {
        question: "In order to protect yourself and others, you should:",
        answers: [
            {choice: "Get vaccinated"},
            {choice: "Wear a mask in indoor public places"},
            {choice: "Wear a mask in crowded outdoor settings and for activities with close contact with others who are not fully vaccinated."},
            {choice: "All of the above"},
        ],
        correct: "All of the above"
    },
    {
        question: "If you are not fully vaccinated, what should you do after you travel?",
        answers: [
            {choice: "Get tested with a viral test 3-5 days after travel AND stay at home for a full 7 days after travel"},
            {choice: "If you don’t get tested, stay home and self-quarantine for 10 days after travel"},
            {choice: "Avoid being around people who are at increased risk for severe illness for 14 days, whether you get tested or not"},
            {choice: "All the answers above"},
        ],
        correct: "All the answers above"
    },

]

function startGame() {
    startBtn.style.display = "none"
    timerCount = 75;
    score = 0;
    console.log(questionIndex);
    displayAnswers();
    startTimer();
}

//starts the timer for the game
function startTimer(){
    timer = setInterval(function(){
        timerElement.textContent = timerCount;
        if (timerCount <= 0) {
            timer.textContent === 0;
            answers.innerHTML = ""
            currentQuestion.textContent = "Game Over"
            clearInterval(timer);
            gameover();
        }  timerCount--;
    }, 1000);
}

function displayAnswers(){
    answers.innerHTML = ""
    currentQuestion.textContent = ""
    if (questionIndex >= questionsArray.length){
        gameOver();
    }
    currentQuestion.textContent = questionsArray[questionIndex].question
    var ansArr = questionsArray[questionIndex].answers;
    ansArr.forEach(element => {
        let choice = element.choice;
        ans = document.createElement('LI');
        but = document.createElement('button');
        but.textContent = choice;

        ans.appendChild(but);
        answers.appendChild(ans);

        ans.addEventListener('click', checkAnswer)
    }
    )
}

function checkAnswer(event){
    if (event.target.textContent === questionsArray[questionIndex].correct){
    alert("Bingo! You got it!");
    score++
    gameScore.textContent = score
    console.log(score)
    questionIndex++
    displayAnswers();
    } else {
    alert("Try next time!")
    if (timerCount <= 10) {
        timerCount = 0;
        gameover();
    } else {
        timerCount -= 10;
        questionIndex++
        displayAnswers();
    }
   
    } 
}

function gameOver(){
    timerElement.textContent = ""
    clearInterval(timer);
    answers.innerHTML = ""
    currentQuestion.textContent = "Game Over"
}

startBtn.addEventListener("click", startGame)
rsBtn.addEventListener('click', clearGame)

function clearGame() {
    localStorage.clear()
    score = 0;
    startBtn.style.display = "inherit"
    answers.innerHTML = ""
    gameScore.innerhtml = ""
    timerElement.textContent = ""
    clearInterval(timer);
    questionIndex = 0;
}