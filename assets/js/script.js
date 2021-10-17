//functions
function createQuiz() {
    //variable to store the HTML output
    const output = [];

    //for each question
    questions.forEach(
        (currentQuestion, questionNumber) => {

            //variable to store the list of possible answers
            const answers = [];

            //and for each available answer...
            for(letter in currentQuestion.answers) {

                //...add an HTML radio button
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value ="${letter}"></input>
                            ${letter} :
                            ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            // add this question and its answers to the output
            output.push(
                `<div class="question">${currentQuestion.question}</div>
                <div class="answers">${answers.join('')}</div>`
            );
        }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizCont.innerHTML = output.join('');
}

function displayResults() {}

//variables
const quizCont = document.getElementById('quiz');
const resultsCont = document.getElementById('results');
const submitBtn = document.getElementById('submit');
const questions = [
    {
        question: "Who invented Javascript?",
        answers: {
            a:"Stan Lee",
            b:"Brendan Eich",
            c:"Ada Lovelace"
        },
        correctAnswer: "b"
    },
    {
        question: "What does console.log do?",
        answers: {
            a:"Displays a message on the HTML page",
            b:"Outputs a message to the page's console",
            c:"Pops a message up at the top of the page"
        },
        correctAnswer: "b"
    },
    {
        question: "What is a variable?",
        answers: {
            a:"A container that stores values",
            b:"A mathematical symbol that produces a result based on two values",
            c:"A method that returns the first element within the document that matches the specified selector"
        },
        correctAnswer: "a"
    }
];

//Kick things off
createQuiz();

//event listeners
//on submit, show results
submitBtn.addEventListener('click', displayResults);
