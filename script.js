// Misc. Variables
correctLength = false;

// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var finalPassword = "";

function generatePassword(){
  // Code to determine the password criteria
  while(!correctLength){
    var passwordLengthConfirm = prompt("How long would you like your password (between 8 and 128 characters please)");
    var passwordLength = parseInt(passwordLengthConfirm);
    if (passwordLength >= 8 && passwordLengthConfirm <= 128){
      correctLength = true;
    }
    else{
      alert("Inccorect password length please try again!");
    }
  }
  var lowercaseConfirm = confirm("Would you like lowercase letters in your password?");
  var uppercaseConfirm = confirm("Would you like uppercase letters in your password?");
  var numConfirm = confirm("Would you like numbers in your password?");
  var specCharConfirm = confirm("Would you like special characters in your password?");

  var passwordCriteria = []

  if(lowercaseConfirm){
    passwordCriteria.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
  }
  else if(uppercaseConfirm){
    passwordCriteria.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
    "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
  }
  else if(numConfirm){
    passwordCriteria.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "0")
  }
  else if(specCharConfirm){
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
generateBtn.addEventListener("click", generatePassword);