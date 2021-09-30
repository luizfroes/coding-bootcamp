// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  const userCriteria = getCriteria();
  const mainArray = getChoices(userCriteria);
  //Final password
  const password = [];

  for (let index = 0; index < userCriteria.length; index++) {
    //pick a random character from the array
    let randomCharacter =
      mainArray[Math.floor(Math.random() * mainArray.length)];

    //Push the character to the password array
    password.push(randomCharacter);
  }

  return password.join("");
}

function promptLength() {
  let length = parseInt(
    prompt(
      "Please choose the length of your password. (Between 8 and 128 characters)"
    )
  );

  if (isNaN(length)) {
    alert("Please choose a number between 8 and 128");
    length = promptLength();
  }

  if (length < 8 || length > 128) {
    alert("Please choose a number between 8 and 128");
    length = promptLength();
  }
  return length;
}

function promptChoices() {
  const isLowercase = confirm("Do you wanna use Lowercase characters?");

  const isUppercase = confirm("Do you wanna use Uppercase characters?");

  const isNumeric = confirm("Do you wanna use Numbers?");

  const isSpecialCharacter = confirm("Do you wanna use Especial characters?");

  // Validate the other criteria
  if (!isLowercase && !isUppercase && !isNumeric && !isSpecialCharacter) {
    alert("You need to choose at least one type of character!");
    return promptChoices();
  }

  return { isLowercase, isUppercase, isNumeric, isSpecialCharacter };
}

// Should return the password criteria
function getCriteria() {
  //Get the password length from the user
  const userCriteria = {};
  userCriteria.length = promptLength();

  //Get other criteria
  const { isLowercase, isUppercase, isNumeric, isSpecialCharacter } =
    promptChoices();
  // userCriteria = { ...userCriteria, ...choices };
  userCriteria.isLowercase = isLowercase;

  return userCriteria;
}

//Push the criteria to the userChoices array
function getChoices(userCriteria) {
  // let userCriteria = getCriteria();
  //User choices
  let userChoices = [];

  if (userCriteria.isLowercase) {
    userChoices = userChoices.concat(lowercase);
  }

  if (userCriteria.isUppercase == true) {
    userChoices = userChoices.concat(uppercase);
  }

  if (userCriteria.isNumeric == true) {
    userChoices = userChoices.concat(numeric);
  }

  if (userCriteria.isSpecialCharacter == true) {
    userChoices = userChoices.concat(specialCharacters);
  }

  return userChoices;
}

//Declaring Arrays
const lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "x",
  "w",
  "y",
  "z",
];

const uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "X",
  "W",
  "Y",
  "Z",
];

const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specialCharacters = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "]",
  "[",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
