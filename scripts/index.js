"use strict";

const app = document.getElementById("quiz-app");
const quizCard = document.getElementById("quiz-details");
const questionsCard = document.getElementById("questions-card");
const resultCard = document.getElementById("result-card");

let quiz;

function initApp() {
   const questions = 
[
    {
        title: "Which animal is known as the King of the Jungle?",
        options: ["Tiger", "Lion", "Elephant", "Leopard"]
    },
    {
        title: "Which animal is the largest mammal on Earth?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Shark"]
    },
    {
        title: "Which bird is a symbol of peace?",
        options: ["Crow", "Dove", "Eagle", "Parrot"]
    },
    {
        title: "Which animal is known to have a long trunk?",
        options: ["Hippo", "Elephant", "Rhino", "Camel"]
    },
    {
        title: "Which animal is known for changing its skin color?",
        options: ["Frog", "Chameleon", "Snake", "Octopus"]
    },
    {
        title: "Which bird cannot fly?",
        options: ["Sparrow", "Ostrich", "Eagle", "Pigeon"]
    },
    {
        title: "Which animal is known to be man's best friend?",
        options: ["Cat", "Dog", "Horse", "Cow"]
    },
    {
        title: "Which sea creature has eight arms?",
        options: ["Starfish", "Octopus", "Crab", "Jellyfish"]
    },
    {
        title: "Which animal is the tallest in the world?",
        options: ["Elephant", "Giraffe", "Horse", "Camel"]
    },
    {
        title: "Which animal is famous for its hump?",
        options: ["Horse", "Camel", "Kangaroo", "Donkey"]
    }
];



    quiz = new Quiz(
        "Quiz Game ",
        `Quiz Game is a fun new way to practice, improve, and test your GK skills.`,
        70,
        questions);

    // questions.map(q => quiz.addQuestion(q.title, q.options));

    new QuizElementsHelper(app, quizCard, questionsCard, resultCard, quiz);
}

initApp();


