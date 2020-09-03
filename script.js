// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  // All YOUR CODE GOES HERE
  var finalPass = "";
  var howLong = prompt("How long would you like your password to be?", 
  "(Pick a number between 8 and 128.)");

if(howLong <8 || howLong >128){
  alert("Pick a number between 8 and 128!")
  generatePassword();
}
else {

  var lowerCase = confirm("Would you like to include lower case letters?");
  var upperCase = confirm("Would you like to include upper case letters? ");
  var numbers = confirm("Would you like to include numbers? ");
  var characters = confirm("Would you like to include characters?");

  var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowers = "abcdefghijklmnopqrstuvwxyz";
  var chars = "!@#$%^&*()";
  var numbs = "1234567890"; 
  var selected = "";

  if(lowerCase === true){
    selected = selected + lowers;
  }

  if(upperCase === true){
    selected = selected + uppers;
  }

  if(numbers === true){
    selected = selected + numbs;
  }

  if(characters === true) {
   selected = selected + chars;
  }

  if(
    lowerCase == false &&
    upperCase == false &&
    characters == false &&
    numbers == false 
   ) {
     alert("Please select at least one option.");
     generatePassword();
   }

  for(var i = 0; i < howLong; i++){
    var randomChar = Math.floor(Math.random()* selected.length);
    finalPass = finalPass + selected[randomChar];

     // var num = math.floor(math.random() * 10) + 1;
  }

    return finalPass
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





