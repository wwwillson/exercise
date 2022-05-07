const quizData = [
    {
        question: "what kind of food you like?",
        a: "pizza",
        b: "ice crean",
        c: "fried chicken",
        d: "hamburger",
        correct: "d",
    },
    {
        question: "how old is wilson?",
        a: "23",
        b: "25",
        c: "27",
        d: "29",
        correct: "c",
    },
    {
        question: "what animal do you like?",
        a: "dog",
        b: "cat",
        c: "bird",
        d: "snake",
        correct: "a",
    },
    {
        question: "what is the most used programming language in 2019?",
        a: "java",
        b: "C",
        c: "python",
        d: "javascript",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const btn = document.getElementById('btn');
let currentQuestion = 0;
let correctCnt = 0;
loadQuiz();

function loadQuiz() {
    deAns();
    const currentQuiz = quizData[currentQuestion];
    questionEl.innerText = currentQuiz.question;
    a_text.innerText = currentQuiz.a;
    b_text.innerText = currentQuiz.b;
    c_text.innerText = currentQuiz.c;
    d_text.innerText = currentQuiz.d;

    currentQuestion++;
}

function deAns() {
    const ans = document.querySelectorAll('.answer');
    ans.forEach((a)=> {
        a.checked = false;
    })
}
btn.addEventListener('click', ()=> {
    const ans = document.querySelectorAll('.answer');
    let answer = undefined;
    ans.forEach((a)=> {
        if(a.checked) {
            answer = a.id;
        }
    });

    if(answer) {
        if(answer==quizData[currentQuestion-1].correct) {
            correctCnt++;
        }
        if(currentQuestion >= quizData.length) {
            quiz.innerHTML = `<h2> You answered correctly at ${correctCnt}/${quizData.length} questions.</h2><button onclick="location.reload()">Reload</button>`;
        }
        else {
            loadQuiz();
        }
    }
})

