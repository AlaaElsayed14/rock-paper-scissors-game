let user__choice = document.querySelector(".user-choice img");
let your__choices = document.querySelectorAll(".choice-option img");
let computer__choice = document.querySelector(".computer-choice img");
let game_result = document.querySelector(".result");
let score =document.querySelector(".score-number");


your__choices.forEach(choice =>{
    choice.addEventListener("click", (e)=> {
       user__choice.src = e.target.src;
       user__choice.className = e.target.className;
       computerChoice();
    })
});

let count = 0;
function computerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    let compOptions = ["paper", 'rock', 'scissors'],
       compChoice = compOptions[randomChoice];
    if (randomChoice == 0){
        computer__choice.src ="assets/images/icon-paper.png"
    }else if(randomChoice == 1 ){
        computer__choice.src = "assets/images/icon-rock.png"
    }else{
        computer__choice.src = "assets/images/icon-scissors.png";
    }
    
    if(compChoice == user__choice.className){
        result = "match draw";
        console.log(compChoice);
    }
     else if(compChoice == compOptions[1] && user__choice.className== compOptions[2]){
        result = "Computer wins";
    }
    else if(compChoice == compOptions[1] && user__choice.className== compOptions[0]){
        result = "You wins"; 
        count++
    }
    else if(compChoice == compOptions[2] && user__choice.className== compOptions[0]){
        result = "Computer wins";
    }
    else if(compChoice == compOptions[2] && user__choice.className== compOptions[1]){
        result = "You wins";
        count++;
    }
    else if(compChoice == compOptions[0] && user__choice.className== compOptions[1]){
        result = "Computer wins";
    }
    else if(compChoice == compOptions[0] && user__choice.className== compOptions[2]){
        result = "You wins";
        count++
    }
    game_result.innerHTML = result;
    score.innerHTML = count;

}    