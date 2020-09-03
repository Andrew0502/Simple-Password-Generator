// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function getPassword(){
  // All YOUR CODE GOES HERE
  var howLong = prompt("How long would you like your password to be?", 
  "(max length 128 characters)");
  var lowerCase = confirm("Would you like to include lower case letters?");
  var upperCase = confirm("Would you like to include upper case letters? ");
  var numbers = confirm("Would you like to include numbers? ");
  var characters = confirm("Would you like to include characters?");

  console.log("test-1");

  var chars = "!@#$%^&*()";
  var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowers = "abcdefghijklmnopqrstuvwxyz";
  var numbs = "1234567890";
  var selected = "";

  console.log("test-2")

  return "Working...";

  if(lowerCase === true){
    selected = selected + lowers;
  }

  if(upperCase === true){
    selected = selected + uppers;
  }

  if(numbers === true){
    selected = selected + numbs;
  }

  if(characters === true);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





