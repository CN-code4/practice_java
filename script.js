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