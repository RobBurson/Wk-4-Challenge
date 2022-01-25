// Questions will be asked
const Questions = [{
    id: 0,
    q: "Who invented Javascript?",
    a: [{ text: "Stan Lee", isCorrect: false },
        { text: "Ada Lovelace", isCorrect: false },
        { text: "Brendan Eich", isCorrect: true },
        { text: "Roald Dahl", isCorrect: false }
    ]

},
{
    id: 1,
    q: "What does console.log do?",
    a: [{ text: "Creates a piece of firewood on your PlayStation", isCorrect: false, isSelected: false },
        { text: "Displays a message on the HTML page", isCorrect: false },
        { text: "Outputs a message to the page's console", isCorrect: true },
        { text: "Pans a message up at the tan of the page", isCorrect: false }
    ]

},
{
    id: 2,
    q: "What is a variable?",
    a: [{ text: "A container that stores values", isCorrect: true },
        { text: "A mathematical symbol that produces a result based on two values", isCorrect: false },
        { text: "A method that returns the first element within the document that matches the specified selector", isCorrect: false },
        { text: "An unknowable element", isCorrect: false }
    ]

}

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the answer
const an1 = document.getElementById('an1');
const an2 = document.getElementById('an2');
const an3 = document.getElementById('an3');
const an4 = document.getElementById('an4');


// Providing answer text
an1.innerText = Questions[id].a[0].text;
an2.innerText = Questions[id].a[1].text;
an3.innerText = Questions[id].a[2].text;
an4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the answer
an1.value = Questions[id].a[0].isCorrect;
an2.value = Questions[id].a[1].isCorrect;
an3.value = Questions[id].a[2].isCorrect;
an4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for an1
an1.addEventListener("click", () => {
    an1.style.backgroundColor = "lightgoldenrodyellow";
    an2.style.backgroundColor = "lightskyblue";
    an3.style.backgroundColor = "lightskyblue";
    an4.style.backgroundColor = "lightskyblue";
    selected = an1.value;
})

// Show selection for an2
an2.addEventListener("click", () => {
    an1.style.backgroundColor = "lightskyblue";
    an2.style.backgroundColor = "lightgoldenrodyellow";
    an3.style.backgroundColor = "lightskyblue";
    an4.style.backgroundColor = "lightskyblue";
    selected = an2.value;
})

// Show selection for an3
an3.addEventListener("click", () => {
    an1.style.backgroundColor = "lightskyblue";
    an2.style.backgroundColor = "lightskyblue";
    an3.style.backgroundColor = "lightgoldenrodyellow";
    an4.style.backgroundColor = "lightskyblue";
    selected = an3.value;
})

// Show selection for an4
an4.addEventListener("click", () => {
    an1.style.backgroundColor = "lightskyblue";
    an2.style.backgroundColor = "lightskyblue";
    an3.style.backgroundColor = "lightskyblue";
    an4.style.backgroundColor = "lightgoldenrodyellow";
    selected = an4.value;
})

// Grabbing the score button
const score = document.getElementsByClassName("score");

// Evaluate method
score[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 2) {
    id++;
    iterate(id);
    console.log(id);
}

})
