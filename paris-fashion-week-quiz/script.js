// Questions and answers
const questions = [
    {
        question: "What year was the first Paris Fashion Week held?",
        answers: ["1945", "1973", "1985", "2000"],
        correctAnswer: 1
    },
    {
        question: "Which iconic Paris location is often used as a backdrop for fashion shows?",
        answers: ["The Louvre", "Eiffel Tower", "Champs-Élysées", "Versailles Palace"],
        correctAnswer: 0
    },
    {
        question: "Who is the designer behind the famous brand Chanel?",
        answers: ["Karl Lagerfeld", "Christian Dior", "Coco Chanel", "Jean Paul Gaultier"],
        correctAnswer: 2
    },
    {
        question: "Which of these fashion houses is known for the signature 'Bar' jacket?",
        answers: ["Givenchy", "Dior", "Yves Saint Laurent", "Balmain"],
        correctAnswer: 1
    },
    {
        question: "Which designer is known for their dramatic, theatrical runway shows in Paris?",
        answers: ["Alexander McQueen", "Balenciaga", "Jean Paul Gaultier", "Valentino"],
        correctAnswer: 0
    },
    {
        question: "How many times a year does Paris Fashion Week take place?",
        answers: ["Once", "Twice", "Three times", "Four times"],
        correctAnswer: 1
    },
    {
        question: "Which designer's 'New Look' revolutionized post-war fashion in Paris?",
        answers: ["Coco Chanel", "Christian Dior", "Pierre Cardin", "Louis Vuitton"],
        correctAnswer: 1
    },
    {
        question: "What type of fashion is showcased during Haute Couture Week in Paris?",
        answers: ["Ready-to-Wear", "Streetwear", "Haute Couture", "Resort Wear"],
        correctAnswer: 2
    },
    {
        question: "What’s the most anticipated finale for many designers at Paris Fashion Week?",
        answers: ["Bridal gown", "Avant-garde outfit", "Menswear collection", "Red carpet look"],
        correctAnswer: 0
    },
    {
        question: "Which of these designers famously introduced gender-fluid collections during Paris Fashion Week?",
        answers: ["Vivienne Westwood", "Alessandro Michele", "Demna Gvasalia", "Riccardo Tisci"],
        correctAnswer: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    document.getElementById("btn0").textContent = currentQuestion.answers[0];
    document.getElementById("btn1").textContent = currentQuestion.answers[1];
    document.getElementById("btn2").textContent = currentQuestion.answers[2];
    document.getElementById("btn3").textContent = currentQuestion.answers[3];
}

function checkAnswer(option) {
    const currentQuestion = questions[currentQuestionIndex];
    if (option === currentQuestion.correctAnswer) {
        score++;
    }
    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
    document.getElementById("next-btn").style.display = "none";
}

function showResults() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("score").textContent = `Your score: ${score}/${questions.length}`;
}

// Initialize the first question
window.onload = function () {
    loadQuestion();
};