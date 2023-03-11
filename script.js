// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


var lowercase = []
var uppercase = []
var number = []
var specialChar = []
var charactersForPassword = []
var passwordArray = []





function generatePassword() {

  // prompt user the enter length of the password
  var passwordLength = prompt("how many characters")

  // Generates the lowercase letters [a...z] and push them to an array called lowercase if the user confirms they want lowercase
  if (confirm('Do you want lowercase letters')) {
    for (let i = 97; i < 123; i++) {
      lowercase.push(String.fromCharCode(i));
    }
  }



  // Generates the uppercase letters [A...Z] and push them to an array called uppercase if the user confirms they want uppercase
  if (confirm('Do you want uppercase letters')) {
    for (let i = 65; i < 91; i++) {
      uppercase.push(String.fromCharCode(i));
    }
  }

  // Generates the numbers [0...9] and push them to an array called numbers if the user confirms they want numbers
  if (confirm('Do you want numbers')) {
    for (let i = 48; i < 58; i++) {
      number.push(String.fromCharCode(i))
    }
  }






  // Generates the special characters   [!, ", #, $, %, &, ', (, ), *, +, ,, -, ., ] and push them to an array called specialChar if the user confirms they want special characters
  if (confirm('Do you want special characters')) {
    for (let i = 33; i < 47; i++) {
      specialChar.push(String.fromCharCode(i));
    }

  }




  // put all the characters in an array to choose the password characters from
  charactersForPassword = [...lowercase, ...uppercase, ...number, ...specialChar]

  // clears the respective character arrays for regeneratation of password
  lowercase = []
  uppercase = []
  number = []
  specialChar = []


  var randomChar
  var passwordChar



  // iterate over the characters for password and get randoms characters and put in the passwordArray to be displayed
  while (passwordArray.length < passwordLength) {
    randomChar = Math.floor(Math.random() * charactersForPassword.length)

    passwordChar = charactersForPassword[randomChar]
    passwordArray.push(passwordChar)
  }


  return passwordArray.join("")

}



// Write password to the #password input
function writePassword() {


  var passwordText = document.querySelector("#password")
  // charactersForPassword = []
  passwordArray = []

  var password = generatePassword();

  passwordText.value = password
  // console.log(passwordArray.join(""))
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
