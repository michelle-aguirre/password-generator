// Assignment code here
var lowercase = [];
var uppercase = [];
var numeric = [];
var special = [];

function createPassword () {
var length = parseInt(prompt("How many characters would you like your password to contain?"));

if (Number.isNaN(length)){
alert ("You must enter a number");
return null;  
}
if (length<8 || length>128){
  alert ("Password must be between 8-128 characters long");
  return null;
}
var islowercase = confirm("Click OK if you'd like to include lowercase");
var isuppercase = confirm("Click OK if you'd like to include uppercase");
var isnumeric = confirm("Click OK if you'd like to include numeric");
var isspecial = confirm("Click OK if you'd like to include special character");
if (islowercase === false && isuppercase === false && isnumeric === false && isspecial === false){
  alert ("You must choose at least one character type");
  return null;
}
var passwordinfo = {
length: length,
islowercase: islowercase,
isuppercase: isuppercase,
isnumeric: isnumeric,
isspecial: isspecial

}
return passwordinfo;
}
//*this function will randomly choose a character from an array by way of array[index]
function randomcharacter(arr) {
var genIndex = Math.floor(Math.random() * arr.length);
var ranElement = arr[genIndex];
return ranElement;
}
function generatePassword() {
  var option = createPassword();
  var userchoice = [];
  var selection = [];
  var password = [];
  if(!option) return null;

if (option.islowercase) {
  selection = selection.concat(lowercase);
  userchoice.push(randomcharacter(lowercase));  
}
if (option.isuppercase) {
  selection = selection.concat(uppercase);
  userchoice.push(randomcharacter(uppercase));  
}
if (option.isnumeric) {
  selection = selection.concat(numeric);
  userchoice.push(randomcharacter(numeric));  
}
if (option.isspecial) {
  selection = selection.concat(special);
  userchoice.push(randomcharacter(special));  
}

for(var i=0; i < option.length; i++) {
var possibleCharacter = randomcharacter (selection);
password.push(possibleCharacter);
}
for(var i=0; i < userchoice.length; i++) {
  password[i] = userchoice[i];
}
return password.join('');
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);