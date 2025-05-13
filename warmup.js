// ✅ Label-the-Code Warm-Up

// Instructions: Add comments next to each line describing what each DOM method does

const button = document.querySelector("#changeColor"); 
// This declares a variable called "button" and stores its value as an element with the ID of "changeColor".
// The method "querySelector" allows you to grab an element and specify its value in CSS (i.e ID, Class, Element) by adding the correct symbol in front of it.
const box = document.getElementById("box");             
// This declares a variable called "box" and stores its value as an element with the ID of "box". 
// The method "getElementByID" specifically is used to grab elements that have been stored in HTML/CSS as an ID.

button.addEventListener("click", () => {
    // This function adds an event listener to a variable called "button".
    //This event is triggred when the button element is clicked. 
  box.style.backgroundColor = "lightblue";              
  // This modifies the background color of the button to "lightblue" once the button is clicked.
  box.innerText = "Color Changed!";                    
  // This modifies the text that lays inside the button to "Color Changed!" once the button is clicked.
});