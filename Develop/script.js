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
  "(max length 128 characters)");
  var lowerCase = confirm("Would you like to include lower case letters?");
  var upperCase = confirm("Would you like to include upper case letters? ");
  var numbers = confirm("Would you like to include numbers? ");
  var characters = confirm("Would you like to include characters?");

  console.log("test-1");

  var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowers = "abcdefghijklmnopqrstuvwxyz";
  var chars = "!@#$%^&*()";
  var numbs = "1234567890"; 
  var selected = "";

  console.log("test-2")

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

  for( i = 0; i < howLong.length; i++){
    var randomChar = Math.floor(Math.random(selected)* howLong);
    finalPass = finalPass + selected[randomChar];

     // var num = math.floor(math.random() * 10) + 1;
  }

  return finalPass
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





