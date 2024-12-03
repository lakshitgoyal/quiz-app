const questions = [
    {
        question: "What is 3!?",
        options: ["A) 3", "B) 4", "C) 5", "D) 6"],
        correct: "D"
    },
    {
        question: "What is the capital of India?",
        options: ["A) Mumbai", "B) Kolkata", "C) Delhi", "D) Chennai"],
        correct: "C"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["A) Earth", "B) Venus", "C) Mars", "D) Jupiter"],
        correct: "C"
    },
    {question: "Which state is known as the Bowl of Rice?",
        options: ["A) Madhya Pradesh", "B) Punjab", "C) West Bengal", "D) Haryana"],
        correct: "C"
    },
    {question: "Which mammal is the biggest cat species in the World?",
        options: ["A) Lion", "B) Lynx", "C) Cheetah", "D) Tiger"],
        correct: "D"
    },
    {question: "Which is the most venomnous Reptile species among the following?",
        options: ["A) Monitor Lizard", "B) Komodo Dragon", "C) King cobra", "D) Boa"],
        correct: "B"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const quizContainer = document.getElementById("quiz-container");
    const currentQuestion = questions[currentQuestionIndex];

    quizContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        ${currentQuestion.options
            .map((option, index) => 
                `<button onclick="checkAnswer('${option.charAt(0)}')">${option}</button>`
            )
            .join("")}
    `;
}

function checkAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex];

    if (answer === currentQuestion.correct) {
        alert("Correct!");
        score++;
    } else {
        alert("Wrong answer.");
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const quizContainer = document.getElementById("quiz-container");

    // Hide the Start Quiz button
    const startButton = document.getElementById("start-quiz");
    if (startButton) {
        startButton.style.display = "none"; // Hides the button
    }

    quizContainer.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your score is ${score} out of ${questions.length}.</p>
        <button onclick="restartQuiz()">Restart Quiz</button>
    `;
}


function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
}

document.getElementById("start-quiz").addEventListener("click", function () {
    displayQuestion();
});
