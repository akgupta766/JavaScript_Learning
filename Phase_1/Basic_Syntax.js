// variable declaration types:
var x = 10;
let y = 15;
const z = 23;
console.log("\nTrying out the different variable declaration types");
console.log("var x =",x);
console.log("let y =",y);
console.log("const z =",z);

//datatypes 
console.log("Given Below are the Primitive Data Types in JS");
console.log(typeof 42); //number
console.log(typeof 3.14); //number
console.log(typeof "Hello world"); //string
console.log(typeof true); //Boolean
console.log(typeof false); //boolean
console.log(typeof undefined); //undefined
console.log(typeof Symbol());
console.log(typeof 10n); //bigint
console.log(typeof null); //object
console.log("Given below are the Non-Primitive Data Types in JS");
console.log(typeof {}); //object
console.log(typeof []); //object
console.log(typeof function(){}); //function (Technically an object but typeof special cases it as a function)

//Block Scope example 
if(true){
    var a = 10;
    let b = 20;
}
console.log("var a leaks outside the block and is accessible here: a =",a);
console.log("Var b is block scoped and is not accessible outside the block");

//const with object/arrays, binding is fixed but the contents are mutable
const arr = [18,23,45,65,76,135];
console.log("Const arr =",arr);
arr.push(123);
console.log("Mutating the contents of const arr by pushing 123 to it, arr =",arr);

    //types of operators in JS
// "+" operator is used for both addition and concatenation
console.log("Adding 1 + 2 = ", 1+2);
console.log("Adding '1' + 2 = ", "1"+2);
console.log("Adding '1' + '2' = ", "1"+"2");
console.log("Adding 1 + 2 + '3' = ", 1+2+"3");

// - , * , / , operators coerce towards numbers

console.log("Subtracting 5 - 3 = ", 5-3);           //  output : 2
console.log("Subtracting '5' - 3 = ", "5"-3);       //  output : 2
console.log("Subtracting 5 - '3' = ", 5-"3");       //  output : 2
console.log("Subtracting 'abc' - 1 = ", "abc"-1);   //  output : NaN
console.log("Subtracting 'abc' - 'a' ", "abc"-"a"); //  output : NaN

console.log("Multiplying 51 * 23 = ", 51*23);       //  output : 1173
console.log("Multiplying '5' * 2 = ", "5"*2);       //  output : 10
console.log("Multiplying '5' * '2' =", "5"*"2");    //  output : 10

console.log("Dividing 9 / 2 = ",9/2);               //output : 4.5
console.log("Dividing '9' / 2 = ", "9"/2);          //output : 4.5
console.log("Dividing 9 / '2' = ", 9/"2");          //output : 4.5 

//truth / falsy values matter in conditionals:
    // Falsy : false, 0, -0, 0n, "", null, undefined, NaN

if(""){
    console.log("Does not runs b'coz empty string is false");
} // doesn't runs

if("0"){
    console.log("Runs, Non empty String is true");
}//runs

if([]){
    console.log("runs, empty arrays/objects are true");
}//runs

// modulo % and exponent ** operators 
console.log("Calculating 5^2 = ", 5**2); //output : 25
console.log("Calcuating 5 % 2 = ", 5%2); //output : 1

//Now Discussing about comparision operator : == , != , === , !== , <= , >=
    //output of comparision operators are always boolean
// loose equality ==
console.log("'5' == 5 = ", "5" == 5); // output : true 
//strict equality ===
console.log("5 === '5' = ", 5==="5"); // output : false

//objects, arrays, and functions are compared by reference (Memory Address), not by values
console.log("comparing [1,2] === [1,2] yeilds = ",[1,2]===[1,2]); //false (b'coz different spots in memory)
console.log("comparing [1,2] == [1,2] yeilds = ",[1,2]==[1,2]);

let  array = [1,2];
let copy_of_array = array;
console.log("comparing array === copy_of_array, yields : ", copy_of_array === array); // output : true (Same spot in memory)

//increment and decrement operation
    //discussing increment operation ++
let i = 5;
++i;
console.log("initial Value of i=5 & after pre-increment = ",i); //output : becomes 6 and then return 6
i++;
console.log("initial Value of i=6 after post increment = ",i); // output : return 6 & becomes 7
    //discussing decrement operation --
let j = 7;
--j;
console.log("initial Value of j=7 & after pre-decrement = ",j); //output : becomes 6 and then return 6
j--;
console.log("initial Value of j=6 after post increment = ",j); // output : return 6 & becomes 5

//ternary operator
age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log("age = 18, thus Status is = ", status);

//logical operator
    // OR (||)
console.log('"Hello" || "World" yields = ',"Hello" || "World"); // output : Hello (First Truthy)
console.log('"" || "Hello"',"" || "Hello"); // output :Hello (First Truthy)
console.log("undefined || null yields = ",undefined || null); // output : null (both False yields last)
    //AND (&&)
console.log('"Hello" && "World" yields = ',"Hello" && "World"); // output: World (Both truthy return last)
console.log("'' && 'Hello' yields = ","" && "Hello"); // output : "" (returns falsy)
console.log("undefined && null yields = ",undefined && null) //output : undefined (returns first falsy)


//Nullish Coalescing (??)
    // the || operator can cause bugs when checking for default values if 0 or "" are valid inputs.
    // To fix this, modern JavaScript uses the Nullish Coalescing (??) operator. It only falls back if the left side is null or undefined

let score = 0;
let final_score = score || 10; // final score becomes 10 b'coz 0 is falsy. this is often an error
console.log("Score || 10 caused Final_Score to become = ", final_score);

let new_final_score = score ?? 10; // new_final_score stays 0 because 0 is not null or undefined.
console.log("Score |?? 10 caused Final_Score to stay = ", new_final_score);