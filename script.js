// Misc. Variables
correctLength = false;

// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var clearBtn = document.getElementById("clear");
var finalPassword = "";
var passwordCriteria = [];

function clearPassword(){
  location.reload();
}

function generatePassword(){
  // Code to determine the password criteria
  while(!correctLength){
    var passwordLengthConfirm = document.getElementById("lengthInput").value;
    var passwordLength = parseInt(passwordLengthConfirm);
    if (passwordLength >= 8 && passwordLengthConfirm <= 128){
      correctLength = true;
    }
    else{
      alert("Inccorect password length please try again!");
      location.reload();
    }
  }
  var lowercaseConfirm = document.getElementById("lowercaseConfirm").checked;
  var uppercaseConfirm = document.getElementById("uppercaseConfirm").checked;
  var numConfirm = document.getElementById("numConfirm").checked;
  var specCharConfirm = document.getElementById("specCharConfirm").checked;

  if(lowercaseConfirm){
    passwordCriteria.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
  }
  if(uppercaseConfirm){
    passwordCriteria.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
    "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
  }
  if(numConfirm){
    passwordCriteria.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "0")
  }
  if(specCharConfirm){
    passwordCriteria.push("!", "@", "#", "$", "%", "^", "&", "*", "?", "_", "+", "=", "<", ">", ".", ":", ";", ",", "~")
  }

  for(i=0; i < passwordLength; i++){
    var randomIndex = Math.floor(Math.random() * passwordCriteria.length);
    var randomElement = passwordCriteria[randomIndex];
    finalPassword += randomElement;
  }
  passwordText.value = finalPassword;
  console.log(finalPassword);
}

// Add event listener to generate button
clearBtn.addEventListener("click", clearPassword);
generateBtn.addEventListener("click", generatePassword);