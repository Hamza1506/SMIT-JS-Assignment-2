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
document.write(farenheit+"\u00B0F "+"is "+toCelcius+"\u00B0C"+"<br><br>")

// Question 7

document.write("<b>Question 7"+"<br><br></b>")

let item1=650;
let item2=100;
let qtyItem1=3;
let qtyItem2=7
let sc=100;
let totalCost= (item1*qtyItem1)+(item2*qtyItem2)+sc

document.write("Price of item 1 is "+item1+"<br>")
document.write("Quantity of item 1 is "+qtyItem1+"<br>")
document.write("Price of item 2 is "+item2+"<br>")
document.write("Quantity of item 2 is "+qtyItem2+"<br>")
document.write("Shipping Charges "+sc+"<br>")
document.write("Total cost of your order is "+totalCost+"<br><br>")

// Question 8

document.write("<b>Question 8"+"<br><br></b>")

document.write("<b>Mark Sheet"+"<br><br></b>")

let totalMarks=980
let marksObtained=804
let percentage=(marksObtained/totalMarks)*100

document.write("Total Marks: "+totalMarks+"<br>")
document.write("Obtained Marks: "+marksObtained+"<br>")
document.write("Percentage: "+percentage+"<br>")

// Question 9

document.write("<b>Question 9"+"<br><br></b>")
document.write("<b>Currency in PKR"+"<br><br></b>")

let totalDollar=10
let totalRiyaal=25

let dlrToPkr=104.80*totalDollar
let riyalToPkr=28*totalRiyaal

let totalCur=dlrToPkr+riyalToPkr

document.write("Total Currency in PKR "+totalCur+"<br><br>")

// Question 10

document.write("<b>Question 10"+"<br><br></b>")

let numb=2
let calculation=((numb+5)*10)/2
document.write("after calculation "+calculation+"<br><br>")

// Question 11

document.write("<b>Question 11"+"<br><br></b>")
document.write("<b>Age Calculator"+"<br><br></b>")

let cyear=2023;
let byear=1999;
let age1=cyear-byear
let age2=age1-1
document.write("Current year "+cyear+"<br>")
document.write("Birth year "+byear+"<br>")
document.write("You are either "+age1+" or "+age2+"<br>")

// Question 12

document.write("<b>Question 12"+"<br><br></b>")

// Question 13

document.write("<b>Question 13"+"<br><br></b>")







