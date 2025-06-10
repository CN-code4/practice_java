function myFunction() { document.getElementById("demo").innerHTML ="Javascript can change HTML content"; }

document.getElementById("demo").innerHTML = "Hello JavaScript!";

//alert("Hello JavaScript!");


/*you can write variables on same line provided you use semicolons
you can also write variables on different lines*/
let x, y, z;
x = 5; y = 6; z = x + y; //x is 5, y is 6, z is 11
//we add plus sign to add the two variables
document.getElementById("demo2").innerHTML = "The value of z is " + z + ".";

/*for blocks of code
must number the functions*/
function myFunction2() {
    document.getElementById("demo3").innerHTML = "So you actually have to number the functions, otherwise they will not work.";
    document.getElementById("demo4").innerHTML = "This is the second function.";
    document.getElementById("demo0").innerHTML = "Checking something here.";
}
/*
let a = 5;
a = 7;
a = a + a;
alert(a);*/

let userName = "Alice"
console.log("Hello" + " " +   userName + "!");

function greetUser() {
    let userName = "Sam";
    console.log("Hello," + " " + userName + "!");
}
greetUser();

const hour = new Date().getHours(); 
let greeting;

if (hour < 12) {
  greeting = "Good morning";
} else {
  greeting = "Good day";
}

document.getElementById("demo5").innerHTML = greeting;

let mark = 50;
if (mark >= 50) {
    console.log("Pass");
}else{
    console.log("Fail");
}

let CGPA = 3.0;
if (CGPA >= 4.0) {
    console.log("First Class");
}else if (CGPA >= 3.5){ 
    console.log("Second Class Upper");
}else if (CGPA >= 3.0) {
    console.log("Second Class Lower");
}

let weight = 65;
if (weight <= 50) { //first condition
    Mwacha = "underweight";
}else if (weight >50<=70) { //second condition if first condition is false
    Mwacha = "normal weight";
}else{
    Mwacha = "overweight"; //third condition if first and second conditions are false
}
document.getElementById("demo6").innerHTML = "You are " + Mwacha + ".";


for (let i = 1; i <= 5; i++) { //for loop
    console.log("This is number " + i);
}

let num = 5;
while (num <= 10) {// while loop
    console.log("This is number " + num);
    num++;
}

const demo = document.getElementById("demo");
demo.style.color = "#F564A9"; //change text color
demo.style.fontSize = "15px"; //change font size to 20px

const newElement = document.createElement("p"); //create a new paragraph element
newElement.textContent = "This is a new paragraph added to the document."; //set text content of the new element
document.body.appendChild(newElement); //append the new element to the body of the document

const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    alert("Allow notifications to be sent!"); //show an alert when the button is clicked 
}); //add an event listener to the button that shows an alert when clicked

const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const display = document.getElementById("displayName");
const displayText = document.getElementById("displayText");
const emailInput = document.getElementById("email");
const submitButton = document.getElementById("submitButton");

nameInput.addEventListener("input", function() {
    display.textContent = "Hello " + nameInput.value + "!"; //update the display text when the input value changes
}); //add an event listener to the input field that updates the display text when the input value changes

emailInput.addEventListener("input", function() {
    display.textContent = ""; //hides the display text when user starts typing in the email input field
})

emailInput.addEventListener("focus", function() {
    display.textContent = ""; //hides the display text when the email input field is focused
});

emailInput.addEventListener("focus", function() {
    displayText.textContent = "Please type your email address"; //shows a message when the user types in the email input field
});

submitButton.addEventListener("mouseover", function(event) {
    displayText.textContent = ""; //hides the message when the submit button is focussed
});

form.addEventListener("submit", function(event) {
    event.preventDefault(); //prevent the default form submission behavior
    nameInput.value = ""; //clear the name input field
    emailInput.value = ""; //clear the email input field
});



function changeBackgroundAddParagraph() {
    const body = document.body; //get the body element
    body.style.backgroundColor = "#ccd4eb"; //change the background color of the body

    const existingParagraph = document.getElementById("my-paragraph"); //get an existing paragraph element
    if (existingParagraph) {
        existingParagraph.remove(); //remove the existing paragraph element if it exists
    }else{
    const newParagraph = document.createElement("p"); //create a new paragraph element
    newParagraph.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."; //set text content of the new element
    newParagraph.id = "my-paragraph"; //set an id for the new paragraph element
    body.appendChild(newParagraph); //append the new element to the body of the document
   }
}

function showHeading() {
    const input = document.getElementById("inputText").value.trim(); //get the input element
    const outputArea = document.getElementById("outputArea"); //get the output div element
    
    outputArea.innerHTML = input; 
}