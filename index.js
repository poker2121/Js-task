// Task Js :
//=============

//^ 1- Write a program that allow to user enter number then print it

// var number = +prompt("Please enter a number:");
// console.log("You entered the number:", number);
//* or by
// document.getElementById("print").innerHTML = "Your Number: " +number

//?______________________________________________________________________________________________________________________________________________
//^ 2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

// var number = +prompt("Please enter a number:");
// if (number % 4 == 0 && number % 3 == 0) {
//     console.log("Yes");}
// else{
//     console.log("No");
// }

//?______________________________________________________________________________________________________________________________________________
//^ 3- Write a program that allows the user to insert 2 integers then print the max

// var num1 = Number(prompt("Please enter Number (1) :"));
// var num2 = Number(prompt("Please enter Number (2) :"));

// if (num1 > num2) {
//   console.log(num1);
// } else {
//   console.log(num2);
// }

//?______________________________________________________________________________________________________________________________________________
//^ 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

// var number = Number(prompt("Please enter number to check:"));

// if (number < 0) {
//   console.log("Negative");
// } else {
//   console.log("Positive");
// }

//?______________________________________________________________________________________________________________________________________________
//^ 5- Write a program that take 3 integers from user then print the max element and the min element.
// var num1 = +prompt("Enter your first number:");
// var num2 = +prompt("Enter your second number:");
// var num3 = +prompt("Enter your third number:");

// if (num1 > num2 && num1 > num3) {
//   console.log("Max element = " + num1);
// } else if (num2 > num1 && num2 > num3) {
//   console.log("Max element = " + num2);
// } else {
//   console.log("Max element = " + num3);
// }

// if (num1 < num2 && num1 < num3) {
//   console.log("Min element = " + num1);
// } else if (num2 < num1 && num2 < num3) {
//   console.log("Min element = " + num2);
// } else {
//   console.log("Min element = " + num3);
// }

//?______________________________________________________________________________________________________________________________________________
//^ 6- Write a program that allows the user to insert integer number then check If a number is oven or odd
// var num = +prompt("enter your num :")
// if(num % 2 == 0){
//   console.log("even")
// }
// else{
//   console.log("odd")
// }

//?______________________________________________________________________________________________________________________________________________
//^ 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
// var char = prompt("enter any Character");
// if (
//   char === "a" ||
//   char === "e" ||
//   char === "i" ||
//   char === "o" ||
//   char === "u"
// )
// {
//   console.log("vowel");
// } else {
//   console.log("consonant");
// }

//?______________________________________________________________________________________________________________________________________________
//^ 9- Write a program that allows user to insert integer then print all numbers between 1 to that’s number
// var num = +prompt("enter your number");

// for (var i = 1; i <= num; i++) {
//   console.log(i);
// }

//?______________________________________________________________________________________________________________________________________________
//^ 10- Write a program that allows user to insert integer then print a multiplication table up to 12.
// var num = +prompt("enter your number");

// for(var i = 1; i <= 12 ; i++){
// console.log(num*i);
// }

//?______________________________________________________________________________________________________________________________________________
// 11- Write a program that allows to user to insert number then print all even numbers between 1 to this number
// var num = +prompt("enter your number");

// for(var i = 2; i <= num; i += 2){
// console.log(i);
// }

//?______________________________________________________________________________________________________________________________________________
//^ 12- Write a program that take two integers then print the power
// var base = +prompt("enter your base number");
// var power = +prompt("enter your power number");
// var result = 1;
// for (var i = 1; i <= power; i++) {
//   result *= base;
// }
// console.log("Result: " + result);

//?______________________________________________________________________________________________________________________________________________
//^ 12- Write a program to enter marks of five subjects and calculate total, average and percentage.
// var num1 = +prompt("enter your number 1");
// var num2 = +prompt("enter your number 2");
// var num3 = +prompt("enter your number 3");
// var num4 = +prompt("enter your number 4");
// var num5 = +prompt("enter your number 5");

// var total = num1 + num2 + num3 + num4 + num5;
// var average = total / 5;
// var percentage = (total / 500) * 100;

// console.log("Total Marks: " + total);
// console.log("Average Marks: " + average);
// console.log("Percentage: " + percentage + "%");
//?______________________________________________________________________________________________________________________________________________
//^ 13-Write a program to input month number and print number of days in that month.
// var month = +prompt("enter your month number");
// var year = +prompt("Enter the year: ");
// if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
//   console.log("31 days");
// }
// else if((month == 4 || month == 6 || month == 9 || month == 11 )) {
//   console.log("30 days");
// }
// // depend on leap year
// else if(month == 2){

//   if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
//     console.log("29 days");
//   } else {
//     console.log("28 days");
//   }
// }

//?______________________________________________________________________________________________________________________________________________
//^14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer , Find percentage and grade

// var totalSubjects = 5;
// var totalMarks = 0;
// var grade;

// for (var i = 1; i <= totalSubjects; i++) {
//   var marks = +window.prompt("Enter marks for subject " + i);
//   totalMarks += marks;

//   var percentage = (marks / 100) * 100;

//   if (percentage >= 90) {
//     grade = "A";
//   } else if (percentage >= 80) {
//     grade = "B";
//   } else if (percentage >= 70) {
//     grade = "C";
//   } else if (percentage >= 60) {
//     grade = "D";
//   } else if (percentage >= 40) {
//     grade = "E";
//   } else {
//     grade = "F";
//   }

//   console.log(
//     "Subject " + i + " - Percentage: " + percentage + "%, Grade: " + grade
//   );
// }

//?______________________________________________________________________________________________________________________________________________
//!--> Using switch case
//^ 15- Write a program to print total number of days in month
// var month = +prompt("Enter the month number (1-12): ");
// var days;

// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     days = 31;
//     break;

//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     days = 30;
//     break;

//   case 2:
//     days = "28 or 29 (depending on leap year)";
//     break;

//   default:
//     days = "Invalid month number";
// }
// console.log("Total number of days: " + days);

//?______________________________________________________________________________________________________________________________________________
//^ 16- Write a program to check whether an alphabet is vowel or consonant
// var char = prompt("Enter the alphabet char: ");

// switch (char) {
//   case 'a':
//   case 'e':
//   case 'i':
//   case 'o':
//   case 'u':
//   case 'A':
//   case 'E':
//   case 'I':
//   case 'O':
//   case 'U':
//     console.log("This is a Vowel");
//     break;
//   default:
//     console.log("This is a Consonant");
// }

//?______________________________________________________________________________________________________________________________________________
//^ 17- Write a program to find maximum between two numbers
// var num1 = +prompt("Enter the first number:");
// var num2 = +prompt("Enter the second number:");

// switch (true) {
//   case (num1 > num2):
//     console.log("The maximum number is: " + num1);
//     break;
//   case (num2 > num1):
//     console.log("The maximum number is: " + num2);
//     break;
//   default:
//     console.log("Both numbers are equal.");
// }
//?______________________________________________________________________________________________________________________________________________
//^ 18- Write a program to check whether a number is even or odd
// var num = +prompt("Enter the number:");

// switch (true){
//   case (num % 2 === 0):
//     console.log("The number is even");
//     break;
//   case (num % 2 !== 0):
//     console.log("The number is odd");
//     break;
// }

//?______________________________________________________________________________________________________________________________________________
//^ 19- Write a program to check whether a number is positive or negative or zero
// var num = +prompt("Enter the number:");

// switch (true) {
//   case (num > 0):
//     console.log("The number is positive");
//     break;
//   case (num < 0):
//     console.log("The number is negative");
//     break;
//    default:
//     console.log("The number is zero !!");
// }

//?______________________________________________________________________________________________________________________________________________
//^ 20- Write a program to create Simple Calculator
// var num1 = +prompt("Enter the first number:");
// var num2 = +prompt("Enter the second number:");
// var operator = prompt("Enter the operation (+, -, *, /):");

// switch (operator) {
//   case '+':
//     console.log("Result: " + (num1 + num2));
//     break;
//   case '-':
//     console.log("Result: " + (num1 - num2));
//     break;
//   case '*':
//     console.log("Result: " + (num1 * num2));
//     break;
//   case '/':
//     if (num2 !== 0) {
//     console.log("Result: " + (num1 / num2));
//     } else {
//     console.log("Error: Division by zero is not allowed");
//     }
//     break;
//     default:
//     console.log("Invalid operation !!");
// }
//~___________________________________________________________________________________________________________________________________________________________