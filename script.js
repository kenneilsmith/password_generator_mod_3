// Assignment code here

// Functions to get characters from CharCode

function randomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function randomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
const cardHeaderElement = document.getElementById('card-header')

//creates a form with options when generate password buttion is clicked
function generateOptionsForm() {
  var uppercaseCheckbox = Object.assign(document.createElement('input'), { type: 'checkbox', id: 'uppercaseCheck' })
  var uppercaseCheckboxLabel = Object.assign(document.createElement('label'), { type: 'text', for: 'uppercaseCheck', textContent: 'Uppercase' })
  cardHeaderElement.appendChild(uppercaseCheckbox)
  cardHeaderElement.appendChild(uppercaseCheckboxLabel)
  console.log(uppercaseCheckboxLabel)
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Get and generate characters for password
function generatePassword() {
  // return (randomLowerCase() + randomUpperCase() + randomNumber());
  generateOptionsForm()


}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
