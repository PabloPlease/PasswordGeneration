// Assignment Code
var generateBtn = document.querySelector("#generate");

var cap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var small = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var spec = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
var characterLibrary = [];

alert("Only 'Yes' is a permitted response");
var capQuestion = prompt("Would you like your password to have capital letters?");
var smallQuestion = prompt("Would you like your password to have lowercase letters?");
var numQuestion = prompt("Would you like your password to have number in it?");
var specQuestion = prompt("Would you like your password to have special characters?");
var lengthQuestion = prompt("How long would you like your password to be? Between 8 and 128 characters is supported.");

if (capQuestion == "Yes") {
  characterLibrary.push(...cap);
};
if (smallQuestion == "Yes") {
  characterLibrary.push(...small);
}
if (numQuestion == "Yes") {
  characterLibrary.push(...num);
};
if (specQuestion == "Yes") {
  characterLibrary.push(...spec);
};

function generatePassword() {
  var item = [];
  for (var i = 1; i <= parseInt(lengthQuestion); i++) {
  const randomIndex = Math.floor(Math.random() * characterLibrary.length);
  item += characterLibrary[randomIndex];
  }
  return item;
};

console.log(generatePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
