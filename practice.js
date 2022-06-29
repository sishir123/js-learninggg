//.........  Primitive Vs NON Primitive Datatype............../
// PRIMITIVE
// Number
// - // INT // 12 / integer
//  12.234 // FLOAT, double
// String
// Boolean  // TRUE and false
// null
// undefined 

// NON-PRIMITIVE (special data types)  // made from primitive data types
//     - Object  (Collection)
//          - JAVASCRIPT Object
//          - Array

//........VAR, CONST, LET.............//

// var myName;  //declaration

// var myName = "Sishir" //initialization// Variable//

// let myName2 = "Sishir 2" // Declaring variable using let//

// const myName3 = "Sishir 3" //Declaring variable using const//

// console.log(myName);
// console.log(myName2);
// console.log(myName3);

// let status1 = true
// let status2 = true
// let status3 = false

// console.log("and", (status1 && status2) && status3);
// console.log("or", status3 || (status1 && status2));
// console.log("not", !status3);
// console.log("NAND", !);


//.......... OPERATORS.............// 

// Arthematic //
// +	Addition  // let c = a+b // where let a= 1 , b = 2   => 3
// -	Subtraction / " => -1 
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division // let c = 10/ 3  => 3.333
// %	Modulus (Division Remainder)  // => instead of returning the value, it returns the reminder // 10%3 = 1(which is the remainder)
// ++	Increment

// post-increment number++  // returns value before it was incremented
// pre-increment ++number // returns value after incrementing
// num1 = 100
// console.log(num1++, num1);  // 100,101
// console.log(++num1, num1);
// --	Decrement


// logical  // returns only one value i.e boolean // true or false
// AND  // returns true if both condition is true
// OR // retursn true if any of the condition is true
// NOT // reverse the boolen


//........IF ELSE.........//

// let num1 = 5;

//  if (num1 == 0) {
    
//  } else if (num1 == 1) {

//  }
//  else if (num1<10) {
//      console.log("less than 10");
//  }

//  else { 
//      console.log("The end");
//  }

//........SWITCH CASE.........//

// switch (num1) {
//     case 0:
//         break;
//     case 1:
//         break;

//     default:
//         console.log("The end");
//         break;
// }

              //.......FUNCTION.........//
// function sum(){  
//     console.log("im inside the sum function");
// }

// sum()

// let num1 = 4;
// let num2 = 5;

// function calculatesum(){
//     console.log("calculatesum");
// }
// calculatesum()

// let num1 = 4;
// let num2 = 5;


// function calculatesum(value1, value2){
//     console.log(value1 + value2);
// }
// calculatesum(num1, num2)
// calculatesum(4,8)


//.........WITHOUT VARIABLE FUNCTION............//

// function calculatesum(value1, value2){
//     console.log(value1 + value2);
// }
// calculatesum(5,7)


//...........ARRAY FUNCTION.................//

// const calculateDiff = (value1, value2) => value1 - value2;

// let diff = calculateDiff(10-5);
// console.log({diff});


// let arr = [1, 2, 3]

// check(arr)

// function check(arr) {
//     let arr2 = arr;
//     arr2[3] = "changed"
// }

// console.log(arr);

//.............FOR LOOP............//
// for(let i=0; i<=10; i++)
//     console.log(i);

//.............While loop............. //

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++
// }

//......... Rest syntax................//

// [a,b, ...rest] = [1, 2, 3, 4, 5];

// console.log(a, b);
// console.log(rest);

// let obj = {
//     a : 1,
//     b : 2,
//     c : 3,
//     d : 4,
// }
// let {a,b, ...rest} = obj;
// console.log(a,b,rest);


//.......................Array function...................//
// .....Arr includes....//
// let arr = [1, 2, 3, 4];
// console.log(arr.includes(4));  

//...Arr index of...//
// let arrr = [4,5,6,7];
// console.log(arrr.indexOf(7));

//.....find index of....//
// let arr = [1, 2, 3, 4]
// console.log(arr.findIndex(el => el < 5))

//...........includes..........//
// let arr = [1, 2, 3, 4]
// console.log(arr.includes(4));



