let choicesList = {"virat": ["Bazaar Azam", "Virat Kohli", "Sachin Tendulkar", "Muhammad Yousaf"],
    "ali": ["Muhammad Ali", "Mike Tyson", "Tyson Fury", "Floyd Mayweather"],
    };

let comQuestion = ["virat", "ali"];

let imageSelector;
let quizNo = 1;
let difficultyLevel;
let buttons= document.getElementsByTagName("button");
for (let button of buttons){
    button.addEventListener("click", function(){
        if (this.getAttribute("data-button") === "start"){
            difficultyLevel = parseInt(this.getAttribute("data-difficultyLevel"));
            displayQuestion(difficultyLevel);
            }
        else if (this.getAttribute("data-button") === "reset"){
            resetGame();
        }
        else if (this.getAttribute("data-button") === "submit"){
            displayResult(difficultyLevel);
        }
        else {alert ("Break");}
    });
}

function displayQuestion(difficultyLevel){
    let endScore = document.getElementById("end-score");               // Calling div containing the result message.
    let showContent = document.getElementsByClassName("display-property");   // Calling options and submit button elements.
    for (let display of showContent){
    display.style.display = "initial";                                       // Displaying the options area by changing "none" property
    }
    let radios = document.getElementsByTagName("input");                         // Unchecking the radio gameButtonsbefore displaying the options
    for (let radio of radios){
    if (radio.checked){
    radio.checked = false;
    }
    }
    if (quizNo<= difficultyLevel){
    endScore.textContent = "";
    let randomNumber = Math.floor(Math.random() * 30);
    imageSelector = comQuestion[randomNumber];
    let options = choicesList[imageSelector];
    let imageSelector = document.getElementById("image");
    let labels = document.getElementsByTagName("label");
    imageSelector.src = `./assets/images/${comQuestion[randomNumber]}.png`;
    imageSelector.style.height = "80%";
    let i = 0;
    for (let label of labels){
    label.textContent = options[i];
    i++;
    }}
    else{
    let correctScore = document.getElementById("correct-answer").textContent;
    endScore.textContent = `FINISH! Score: ${correctScore}/${difficultyLevel}`;
    let imageSelector = document.getElementById("image");
    imageSelector.src = `./assets/images/`;
    imageSelector.style.height = "100%";
    for (let display of showContent){
    display.style.display = "none";                                       // Removing option area and submit button
    }
    }
    questionNumber++;
    }