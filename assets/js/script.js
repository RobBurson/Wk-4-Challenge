// //functions
// function createQuiz() {
//   //variable to store the HTML output
//   const output = [];

//   //for each question
//   questions.forEach((currentQuestion, questionNumber) => {
//     //variable to store the list of possible answers
//     const answers = [];

//     //and for each available answer...
//     for (letter in currentQuestion.answers) {
//       //...add an HTML radio button
//       answers.push(
//         `<label>
//                         <input type="radio" name="question${questionNumber}" value ="${letter}"></input>
//                             ${letter} :
//                             ${currentQuestion.answers[letter]}
//                     </label>`
//       );
//     }
//     // add this question and its answers to the output
//     output.push(
//       `<div class="slide">
//       <div class="question">${currentQuestion.question}</div>
//                 <div class="answers">${answers.join("")}</div>
//                 </div>`
//     );
//   });

//   // finally combine our output list into one string of HTML and put it on the page
//   quizCont.innerHTML = output.join("");
// }

// function displayResults() {
//   //gather answer containers from the quiz
//   const answerCont = quizCont.querySelectorAll(".answers");

//   //keep track of user's answers
//   let numCorrect = 0;

//   //for each question...
//   questions.forEach((currentQuestion, questionNumber) => {
//     //find selected answer
//     const answerCont = answerCont[questionNumber];
//     const selector = `input[name=question${questionNumber}]:checked`;
//     const userAnswer = (answerCont.querySelector(selector) || {}).value;

//     // if answer is correct
//     if (userAnswer === currentQuestion.correctAnswer) {
//       //add to the number of correct answers
//       numCorrect++;

//       //color the answers green
//       answerCont[questionNumber].style.color = "lightgreen";
//     }
//     //if answer is wrong or blank
//     else {
//       //color the answers red
//       answerCont[questionNumber].style.color = "red";
//     }
//   });
//   // show number of correct answers out of total
//   resultsCont.innerHTML = `${numCorrect} out of ${questions.length}`;
// }

// function showSlide(n) {
//     slides[currentSlide].classList.remove('active-slide');
//     slides[n].classList.add('active-slide');
//     currentSlide = n;
//     if(currentSlide === 0){
//       previousButton.style.display = 'none';
//     }
//     else{
//       previousButton.style.display = 'inline-block';
//     }
//     if(currentSlide === slides.length-1){
//       nextButton.style.display = 'none';
//       submitButton.style.display = 'inline-block';
//     }
//     else{
//       nextButton.style.display = 'inline-block';
//       submitButton.style.display = 'none';
//     }
//   }

//   function showNextSlide() {
//       showSlide(currentSlide+1);
//   }

//   function showPreviousSlide() {
//       showSlide(currentSlide-1);
//   }

// //variables
// const quizCont = document.getElementById("quiz");
// const resultsCont = document.getElementById("results");
// const submitBtn = document.getElementById("submit");
// const myQuestions = [
//   {
//     question: "Who invented Javascript?",
//     answers: {
//       a: "Stan Lee",
//       b: "Brendan Eich",
//       c: "Ada Lovelace",
//     },
//     correctAnswer: "b",
//   },
//   {
//     question: "What does console.log do?",
//     answers: {
//       a: "Displays a message on the HTML page",
//       b: "Outputs a message to the page's console",
//       c: "Pops a message up at the top of the page",
//     },
//     correctAnswer: "b",
//   },
//   {
//     question: "What is a variable?",
//     answers: {
//       a: "A container that stores values",
//       b: "A mathematical symbol that produces a result based on two values",
//       c: "A method that returns the first element within the document that matches the specified selector",
//     },
//     correctAnswer: "a",
//   },
// ];

// //Kick things off
// createQuiz();

// //Pagination

// function quizQuestion() {
//   start.style.display='none';
// listEl.style.display='block';
// let questionMake = myQuestions[quizCont]
// }
// // const previousButton = document.getElementById("previous");
// // const nextButton = document.getElementById("next");
// // const slides = document.querySelectorAll(".slide");
// // let currentSlide = 0;

// // //show the first slide
// // showSlide(currentSlide);

// //event listeners
// //on submit, show results
// submitBtn.addEventListener("click", displayResults);
// previousButton.addEventListener("click", showPreviousSlide);
// nextButton.addEventListener("click", showNextSlide);
