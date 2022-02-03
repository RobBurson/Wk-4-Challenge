var quiz = document.getElementById('quiz');
var score = document.getElementById('score');
var submit = document.getElementById('submit');
var time = document.querySelector('time');
var start = document.getElementById('start');
var container = document.querySelector(".container")
var points = 0;

var timer = 30;
var timerTick;
// start timer
function timerStart() {
    timerTick = setInterval(function () {
        timer--;
        var reset = (timeElement.textContent = "Time:" + " " + timer);
        timer = timer;
        if (timer <= 0) {
            clearInterval(timerTick);

            timeElement.textContent = reset;
        }
    }, 1000);
}


function createQuiz(questions, quiz, score, submit, timer){

    var pageSize = 1;
    var skip = 0;
    

    function generateQuestions(questions, quiz, skip, take){
        //code here
        var output = [];
        var answers;
        var q = questions.slice(skip, skip + take);

        //for each question
        for(var i=0; i < q.length; i++){
            //reset the list of answers
            answers = [];

            //for each answer to given question
            for(letter in q[i].answers){
                // add html radio button
                answers.push(
                    '<label>'
                    + '<input type = "radio" name = "question'+i+'" value="'+letter+'">'
                    + letter + ': '
                    + q[i].answers[letter]
                + '</label>'
                );
            }

            // add given question and its answers
            output.push(
                '<div class="question">' + q[i].question + '</div>'
                    + '<div class="answers">' + answers.join('') + '</div>'
            );
        
        }

        // combine the output list into a string of html and display it on the page
        quiz.innerHTML = output.join('');
    }

    function generateScore(questions, quiz, score){
        // //code here

        // // gather answers
        // var scoreContainers = quiz.querySelectorAll('.answers');

        // // track user answers
        // var userSubmission = '';
        // var correct = 0;

        // // for each question
        // for(var i=0; i < questions.length; i++){

        //     // find answer user selected
        //     userSubmission = (scoreContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

        //     // if correct
        //     if(userSubmission===questions[i].correctAnswer){
        //         // add to correct answers
        //         correct++;

        //         // color correct answers blue
        //         scoreContainers[i].style.color = 'lightblue';
        //     }

        //     // if answer was incorrect/blank

        //     else{
        //         // color answers grey
                
        //         scoreContainers[i].style.color = 'grey';
        //     }
        // }

        // show number of correct answers out of total answers
        score.innerHTML = points + ' out of ' + questions.length;
    }

    function gradeQuestions(questions, start, count) {
        for(var i = start; i < start + count && i < questions.length; i++) {
            var question = questions[i];
            var answer = (document.querySelector(`input[name="question${i-start}"]:checked`)||{}).value
            

            if(answer === question.correctAnswer) {
                points++;
            }
        }
    }

    function progressQuiz() {
        skip += pageSize;
        if(skip < questions.length) {
            generateQuestions(questions, quiz, skip, pageSize);
        } else {
            generateScore(questions, quiz, score);
        }
    }

    generateQuestions(questions, quiz, skip, pageSize);

    submit.onclick = function(){
        if(skip < questions.length){
            gradeQuestions(questions, skip, pageSize);
        } 
        progressQuiz();
    }

    // start.onclick = function()
}

var quizQuestions = [
    {
        question: "Who invented Javascript?",
            answers: {
              a: "Stan Lee",
              b: "Brendan Eich",
              c: "Ada Lovelace",
              d: "Matthew Mercer",
            },
            correctAnswer: "b",
          },
          {
            question: "What does console.log do?",
            answers: {
              a: "Displays a message on the HTML page",
              b: "Pops a message up at the top of the page",
              c: "Outputs a message to the page's console",
              d: "Spawns a piece of firewood on your Playstation",
            },
            correctAnswer: "c",
          },
          {
            question: "What is a variable?",
            answers: {
              a: "A container that stores values",
              b: "A mathematical symbol that produces a result based on two values",
              c: "A method that returns the first element within the document that matches the specified selector",
            },
            correctAnswer: "a",
          },
        ];



        createQuiz(quizQuestions, quiz, score, submit, timer);