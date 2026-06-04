
// //var Hoisting

// console.log(a);
// var a = 20;    
// //undefined


// // Let Hoisting 
// console.log(b);
// let b = 50;   

// ReferenceError: Cannot access 'b' before initialization


//Const Hoisting 
// console.log(c);
// const c = 40;
// //ReferenceError: Cannot access 'c' before initialization



//Function Hoisting 
// getMyname('pritam');

// function getMyname(finalName){
//     console.log(finalName);
// }

// function hoisting code excute krega

//Function Exppression Hoisting

// greet();

// var greet = function(){
//     console.log('hello world');
// }

// //TypeError: greet is not a function 
// // <<-- Greet variable hoist hua, function nahi  -->>

// class hoisting

class Human {

}

const obj1 = new Human();