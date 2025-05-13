// 🔍 Code Review: What's Wrong with This Color Changer?


// Instructions: Fix this code so it correctly changes color when clicked.
// There are 3 Problems. list them below and fix them in the code.
// PROBLEM 1: The call "querySelecter" is spelled incorrectly. The correct spelling is "querySelector".

// PROBLEM 2: The code to change the background color is missing the call "style" in the dot notation. 
// The correct way to write this is box.style.backgroundColor = "coral"; 

// PROBLEM 3: The method to change the inner text in the variable "box" is written incorrectly.
// The correct way to write this is box.innerText = "New Color Applied!";

const btn = document.querySelecter("#color-button");
const box = document.getElementById("color-box");

btn.addEventListener("click", () => {
  box.backgroundColor = "coral"; 
  box.insideText = "New Color Applied!"; 
});