'use strict';

var firstName = prompt("Enter your name");
var gender = prompt("Enter your gender please...").toLowerCase()
if (gender == "male" || gender == "female"){
    
    } 
else {
    prompt("Please your gender...");
}        
var age = prompt("Please enter your age...");
if (age > 0){
}
else {
    alert("Your age is less than or equal to zero");
}

if (confirm("Are you wants to skip the welcoming message?")) {
  } 
else if(gender =="male"){
    alert("Welcome Mr" + " " + firstName);
    
    } 
else if ( gender == "female"){
    alert("Welcome Ms " + " " + firstName);
    
    }
else {
    alert("welcome" + " " +firstName);
    
  }
  
 let answers =[];
 
  function creatQuestion(stringQuestion){
    let question = prompt(stringQuestion).toLowerCase();
    validateQuestion(question);
}

function validateQuestion (answer){
    if (answer != ""){
        answers.push(answer);
     } 
    else {
         answers.push("Invalid");
     }
}


    creatQuestion("It's your first time in our website?");
    
    creatQuestion("Do you like the design?");
    
    creatQuestion("are you will recummended our website to your friend?");
    
    
function printAnswers(arr){
    for (let i = 0;i<answers.length;i++)
        console.log("answer of question " + i + " is : " +answers[i]);
    }
    
 printAnswers(answers); 