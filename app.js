var displayQues = document.getElementById('dispquestion')
var totalQuestion = document.getElementById('totalques')
var currentQues = document.getElementById('curques')
var rowQues = document.getElementById('questionRow')
var result = document.getElementById('resultdiv')
var main = document.getElementById('maindiv')
var showpercent = document.getElementById('percentage')
var indexval = 0;
var marks = 0;
var questions = [
    {
        question: "1) HTML stands for _______________.",
        options: ["HyperText Markup Lauguage", "hyportext markup lauguage", "hypotext markup laugauge", "none of these"],
        correctAns: "HyperText Markup Lauguage",
    },
    {
        question: "2) CSS stands for _______________.",
        options: ["Cascading Styling Sheet", "Cascading Sheet Styling", "Cancel Sheet Styling", "none of these"],
        correctAns: "Cascading Styling Sheet",
    },
    {
        question: "3) JS stands for _______________.",
        options: ["JavaScript", "none of these", "JavaSheet", "JavaStyle"],
        correctAns: "JavaScript",
    },
    {
        question: "4) DOM stands for _______________.",
        options: ["Document Object Model", "Direct Object Model", "none of these", "Direct Objective Models"],
        correctAns: "Document Object Model",
    },
    {
        question: "5) ROM stands for _______________.",
        options: ["Read Only Memory", "none of these", "Revise Only memory", "Revise all Memory"],
        correctAns: "Read Only Memory",
    },
    {
        question: "6) IDE stands for _______________.",
        options: ["integrated development environment", "intergrat devalopment enviroment", "intergrated develop enviroment", "none of these"],
        correctAns: "integrated development environment",
    }
]


function renderScreen() {
    displayQues.innerHTML = questions[indexval].question;
    for (i = 0; i < questions[indexval].options.length; i++) {
        var optval = questions[indexval].options[i];
        var corVal = questions[indexval].correctAns[i];
        rowQues.innerHTML += `<div class="col-md-6 p-2"><button onclick="chkAns('${questions[indexval].options[i]}','${questions[indexval].correctAns}')" class="btn btn-dark w-100 shadow p-3 px-5 rounded-pill ">${optval}</button></div>`
    }
    totalQuestion.innerHTML = questions.length;
    currentQues.innerHTML = indexval + 1;
}

renderScreen()

function nextQues() {
    rowQues.innerHTML = "";
    if (indexval + 1 == questions.length) {
        result.style.display = 'block';
        main.style.display = 'none';
        showpercent.innerHTML = (marks / 6) * 100;
        // showpercent.tofixed(2);
        //var a = showpercent.toFixed(2);
        // ye pta ni q ni chl sb tarh laga ky deka//showpercent = tofixed(4);
    } else {
        indexval++;
        renderScreen();
    }
}

function chkAns(optionvalue, correctvalue) {
    if (optionvalue == correctvalue) {
        marks++;


    }
    nextQues();

}

