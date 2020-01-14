// ARROW FUNCTION

// var user = {
//     firstName : "Foo",
//     lastname : "Bar",
//     fullName : function(){
//         var nestedFunc = () => {
//             return this.firstName + " " + this.lastname; 
//         }
//         return nestedFunc();
//     }
// }
// console.log(user.fullName());

// ES5

// var numbers = [2, 3, 4, 5, 6];
// var doubleArray = numbers.map(function (value, index, array) {
//     return value * 2;
// })
// console.log(doubleArray);

// // ES6
// var tripleArray = numbers.map((value, index, array) => value * 3);
// console.log(tripleArray);


// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// var Person = (fname) => {
//     this.fname = fname;
// }


// function demo(...args){
//     console.log();
// }

// demo("Foo", 32)


// var ask = (question, yes, no) => {
//     if(confirm(question)) yes();
//     else no();
// }

// ask(
//     "Do you Agree?",
//     ()=>alert("You agreed!"),
//     ()=>alert("Cancelled the execution.")
// )






// PROMISES

// Producer code
// var serverDelay = () => {
//     var promise = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve({"data" : "Success"});
//             // reject(new Error("Something bad happened."))
//         }, 3000);
//     })
//     return promise;
// }

// // Consumer Code
// serverDelay().then((response)=>{
//     console.log("RESPONSE : ", response)
//     return 'The response from the server is' + response['data'];
// }).then(resp => {
//     console.log(resp);
// })
//   .catch(err => console.log(err))  ;

// console.log("Promise is working...")


// Producer Code
// var delay = ms => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Here the data comes.");
//             // reject(new Error('Bad Luck.'))
//             // throw "Bad Luck";
//         }, ms)
//     })
// }

// // Consumer Code using then() function
// delay(2000)
//     .then(resp => console.log("SERVER RESPONSE : " + resp))
//     .catch(err=>console.log(err));

// // Consumer Code using Async ... await
// async function callDelay() {
//     try {
//         var data = await delay(2000);
//         console.log("ASYNC FUNCTION :", data)
//     } catch (err) {
//         console.log(err)
//     }
// }

// callDelay();







// BLOCK SCOPING

// function display(arr){
//     if(arr.length < 2){
//         let flash = ;
//         // console.log(load);              // undefined
//     }else{

//         let load = "LOADING";
//         console.log(load);
//     }
// }
// display([2,3,4,5])




//  IIFE



// (function(){
//     var myVar = ""
//     console.log("IIFE Called");
// })();


// let funcArray = [];

// for (var i = 0; i < 5; i++) {
//     (function (num) {
//         funcArray.push(function () {
//             return num;
//         })
//     })(i)
// }

// for (let i = 0; i < 5; i++) {
//     funcArray.push(function(){return i;});
// }

// console.log(funcArray.length);
// console.log(funcArray[3]());          // ?
// console.log(funcArray[1]());          // ?
// console.log(funcArray[4]());          // ?


// const user = "FOO";

// user = "Bar";


// const user = Object.freeze({
//     name : "Foo"
// })

// user.name = "Bar";

// console.log(user);






// REST / SPREAD

// function display(name, ...args){
//     console.log(args[1]);              // 
//     for(let item of args){
//         if(typeof item === 'number'){
//             console.log(item + " is number.");
//         }
//     }
// }

// display("Foo");
// display("Foo", 32);
// display("Foo", 34, 'test@test.com');



// SPREAD
let arr = [3,4,5];

let newArr = [1,2,arr];

// console.log(newArr);            // ? [1,2,[3,4,5]]      [1,2,3,4,5]


let obj = {
    firstName : "Foo",
    lastName : "Bar"
}

let newObj = {
    ...obj,
    age : 32
}

obj.lastName = "Changed Name";

// console.log(newObj);


let targetObj = Object.assign({}, obj, {
        email : 'test@test.com', 
        firstName : "New F Name"
    })

console.log(targetObj);

