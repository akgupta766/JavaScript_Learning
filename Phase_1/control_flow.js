// if / else statement 
    //Runs code conditionally based on the boolean expression
let age = 20;
if(age > 18){
    console.log("\nAssigned Value of age = 20, Thus : Adult");
}else if(age >= 13 ){
    console.log("\nTeenager");
}else{
    console.log("\nChild");
}

// switch statement 
let day = "Friday";
switch(day){
    case "Monday":
        console.log("Start of the Week");
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("Midweek");
        break;
    case "Friday":
        console.log("Almost Weekend");
        break;
    default:
        console.log("Weekend");
}

//for loop - it is used when numbeer of iterations needed are known
for(let i = 0; i<5; i++){
    console.log("Demonstrating For Loop : ", i);
}

// while loop - runs as long as the condition is true checked befor each iteration
//used when the iteration count is known in advance
let n = 5;
while(n<7){
    console.log("\ngiven : N=5 and while loop runs till N < 7, N = ", n);
    n++;
}

// do..while
let m = 0;
do{
    console.log("\ngiven : M=0 and do..while loop runs till M < 5, N = ",m);
    m++;
}while(m < 5);


//for..of
    //iterates over values of an iterable (arrays,strings,maps,sets)

const fruits = ["apples","bannna","guava","cherry"];
console.log("\nIteraring over the array 'fruits' : \n",);
for(const fruit of fruits){
    console.log(fruit);
}

console.log("Iterating over the String 'Hey' :\n");
for (const char of "Hey"){
    console.log(char);
}

//for..in 
    //iterates over enumerable property keys of an object (or indices of an array - but avoid using it for arrays)
const person = {name:"Abhishek",age:20,gender:"Male"};
for(const key in person){
    console.log(key,person[key]);
}
    //illustration of loop control : continue and break
for(let j = 0; j <= 5; j++){
    if(j == 0)
        console.log("Skipped this iteration");
        continue; //Skip this iteration

    if(j == 4)
        break;      // exit the loop entirely
    console.log(j); // 1,2,3     
}



// Array iteration methods (alternative to loops)
const  nums = [1,2,3,4,5];

    //.forEach() : run a function for each element 
//like for....of we can't use "break". Used for side effects(DOM updates, logging)
//not for building new data
nums.forEach((n) => console.log(n));

    //.map() transforms each element into an array
doubled = nums.map((x) => x*2);    //[]
console.log("Doubled the items in num : ",doubled);

    //.filter() keeps the element that passes a test
const evens = nums.filter((n) => n % 2 == 0);
console.log("After using filter : ", evens);

    //.reduce() - collapse an array into single value
const sum = nums.reduce((total,n) => total + n, 0);
console.log("Sum of all element of 'num' array : ",sum);

    //.find() used to get the first match. returns the value
const firstEven = nums.find((n) => n%2 === 0);
console.log("The the even item in the array :", firstEven);
    //.findIndex() used to get first match index 
const firstEvenIdx = nums.findIndex((n) => n% 2 ==0);
console.log("Index Of the first even item in the array :",firstEvenIdx);

    // .some()
nums.some((n) => n > 4); //true (at least one matches)
    // .every()
nums.every((n) => n > 2); //false (even if one doesn't match)

// chaining 
const result = nums.filter((n) => n % 2 === 0).map((n) => n * 10);
console.log(result); //[20,40]