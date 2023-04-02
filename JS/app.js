'use strict';

var firstName = prompt("Enter your name");
var gender = prompt("Enter your gender please...").toLowerCase
if (gender != "male" || gender != "female"){
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