// Assignment Code
var generateBtn = document.querySelector("#generate");

//Random Character Generator
function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1-rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {

 //This while loop will force the user to choose a password length between 8 and 128 characters
  while (true) {

    var userInput = window.prompt("How long would you like your password to be?")

    // User exited prompt for password generator
    if(userInput === null) {
      return
    }

    var passwordLength = parseInt(userInput)

    if (isNaN(passwordLength)) {
      window.alert("This is not a numerical value! Please enter a number.")
    } else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Password length must be between 8 and 128 chacters!")
    } else {
      break
    }
  }

  //What characteristics does the user want the password to contain
  var userWantsNumbers = window.confirm("Would you like to include numbers in your password?");
  var userWantsSymbols = window.confirm("Would you like to include symbols in your password?");
  var userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password?");
  var userWantsUppercase = window.confirm("Would you like to include uppercase letters in your password?");

  // Random Character Generator
  var numberList = ["0", "1" , "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "+", "-", "~", "(", ")", "<", ">", ".", ",", "{", "}", ";", ":", "-", "_"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = []

  var characterOptions =[]

  for(var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }

  if (userWantsNumbers === true) {
    characterOptions.push(numberList)
  }

  if (userWantsSymbols === true) {
    characterOptions.push(symbolList)
  }

  if (userWantsLowercase === true) {
    characterOptions.push(lowercaseList)
  }

  if (userWantsUppercase === true) {
    characterOptions.push(uppercaseList)
  }

  if (characterOptions.length === 0) {
    characterOptions.push(uppercaseList)
  }

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(characterOptions)
    var randomChar = getRandomItem(randomList)
    generatedPassword += randomChar
  }

  console.log(generatedPassword)
  return generatedPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Password will only be displayed if all propmts are followed (prevents undefined)
  if (password) {
  passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);