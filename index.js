//Question 1
//Addition
document.write("<b>Question 1"+"<br><br></b>")
document.write("<b>Addition"+"<br><br></b>")
var num1 =+prompt("Enter Num 1")
var num2 =+prompt("Enter Num 2")
var num3 =+prompt("Enter Num for Table")
var sum=num1+num2
document.write("Sum of " + +num1 + " and " + +num2 + " is " + sum +"<br><br>")

//Question 2
//Subtraction
document.write("<b>Question 2"+"<br><br></b>")
document.write("<b>Subtraction"+"<br></b>")
var sub=num1-num2
document.write("<br>"+"Subtraction of " + +num1 + " and " + +num2 + " is " + sub + "<br><br>")

//Question 2
//Multiplication
document.write("<b>Multiplication"+"<br></b>")
var mul=num1*num2
document.write("<br>"+"Multiplication of " + +num1 + " and " + +num2 + " is " + mul+ "<br><br>")

//Question 2
//Division
document.write("<b>Division"+"<br></b>")
var divi=num1/num2
document.write("<br>"+"Division of " + +num1 + " and " + +num2 + " is " + divi+ "<br><br>")

//Question 2
//Modulus

document.write("<b>Modulus"+"<br></b>")
var mod=num1%num2
document.write("<br>"+"Modulus of " + +num1 + " and " + +num2 + " is " + mod+ "<br><br>")

//Question 3

document.write("<b>Question 3"+"<br><br></b>")
//a
let a;
//b
document.write("Variable after variable declaration is :"+a+"<br><br>")
//c
let b=5
//d
document.write("Initial Value:"+b+"<br><br>")
//e
b++
//f
document.write("Value after increment:"+b+"<br><br>")
//g
let c=b+7;
//h
document.write("Value after addition is:"+c+"<br><br>")
//i
c--
//j
document.write("Value after decrement is:"+c+"<br><br>")
//k
let d=c%3;
//l
document.write("The remainder is:"+d+"<br><br>")

//Question 4
document.write("<b>Question 4"+"<br><br></b>")
let ticketPrice=600;
let tickets=5;
let total = ticketPrice*tickets
document.write("Total cost to buy "+tickets+" tickets to a movie is "+total+"PKR"+"<br><br>")

//Question 5
document.write("<b>Question 5"+"<br><br></b>")
document.write("Table of "+num3+"<br><br>")
for(i=1;i<=10;i++){
    document.write(num3+"x"+i+"="+num3*i+ "<br><br>")
}
// Question 6
document.write("<b>Question 6"+"<br><br></b>")

let celcius =+prompt("Enter Temperature in celcius")
let ToFarenheit= (celcius*9/5)+32
let farenheit =+prompt("Enter Temperature in Farenheit")
let toCelcius=(farenheit-32)*5/9
document.write(celcius+"\u00B0C "+"is "+ToFarenheit+"\u00B0F"+"<br><br>")
document.write(farenheit+"\u00B0F "+"is "+toCelcius+"\u00B0C")


