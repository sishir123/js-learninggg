// variable => vary  

// declaration VS Initialization
var myName; // declaration

// to comment enter (ctr + /)

/* 
    for multi line commnet enter (shift + alt + A)
*/

// let a = "john Doe"


var myName = "John Doe"; //  initialization
myName = "new John doe" // re-initializaiton
var myName = "final John " //  infinite number of re-declartion


// let was introduce in ES6 //  in 2015 
let myName2 = 12
myName2 = 1212
myName2 = 131313
// let myName2 = 1313 // variable defined with let keyword cannot be redeclared and only be re-initialized

const myName3 = null
// myName3 = "change"  // error => Assignment to constant variable. // variable defined with const  cannot be re-initialization 




// global variable  vs blockscoped variable vs functional scoped

// varaible defined with var keyword are global variable 
// varaible defined with let  keyword can be  global, blocked, functional variable 


var myName = "re-declared"
myName2 = "re-initialized"


// NAMING

var myName = "cameCase"
var my_name = "snake_case"


// // DATA TYPES
// INT // 12 / integer
// // 12.234 // FLOAT, double



// Object  // {key:"value",num:1}
// Advance JS
// Symobl
// BigInt

//  Primitive Vs NON Primitive Datatype
// PRIMITIVE
// Number
// - // INT // 12 / integer
//  - // // 12.234 // FLOAT, double
// String
// Boolean  // TRUE and false
// null
// undefined 

// NON-PRIMITIVE (special data types)  // made from primitive data types
//     - Object  (Collection)
//          - JAVASCRIPT Object
//          - Array


let random;

console.log({ random });
console.log(myName);
console.log(myName2);
console.log(myName3);
console.log(typeof (myName));


let fruit1 = "applie";
let fruit2 = "banana";
let age = 25;

let arr = [fruit1, fruit2, age, { a: 1 }]
// index in array always starts with 0
console.log({ arr });
console.log(arr[0]);


let obj = {
    value: "key"
}

let value;
let value2 = null;

let obj2 = {
    value,  // Keys are also referred to as attribute , property
    "key2": value2,
    arr,
}

console.log(obj);
console.log(obj2);
console.log(obj2.key2);


// ___________JUNE 9 _______dAY 2___________

// 

// OPERATORS 

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

let status1 = true
let status2 = true
let status3 = false
console.log("and", (status1 && status2) && status3);
console.log("or", status3 || (status1 && status2));
console.log("not", !status3);
console.log("NAND", !((status1 && status2) && status3));

// comparision
//
// = // assignement
// ==  // equals to //  to check if variables contain the same data
// != // not equals to //  to check if variables contain the different data

// STrictly checks the data-type of the operands too
// === 
// !===

























