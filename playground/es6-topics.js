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
// let arr = [3,4,5];

// let newArr = [1,2,arr];

// console.log(newArr);            // ? [1,2,[3,4,5]]      [1,2,3,4,5]


// let obj = {
//     firstName : "Foo",
//     lastName : "Bar",
//     middleName : "Bam"
// }

// let newObj = {
//     ...obj,
//     age : 32,
//     middleName : "New M Name"
// }

// obj.lastName = "Changed Name";

// console.log(newObj);


// let targetObj = Object.assign({}, obj, {
//         email : 'test@test.com', 
//         firstName : "New F Name"
//     })

// console.log(targetObj);










// DESTRUCTURING

// Array

// let fruits = ["Apple", "Banana", "Orange", "Mango"];

// let  [el1, , el3, el4] = fruits;

// console.log(el3);           // ?

// Object 

// let myModule = {
//     drawText: text => console.log("Drawing " + text),
//     darwCircle: r => console.log(Math.PI * r * r)
// }

// let { darwCircle: dc, drawText: dt } = myModule;

// drawText("Sample Text");
// dt("Some Text");


// let user = {
//     firstName: "Foo",
//     age: 32,
//     friends: ["Bar", "Bam", "Baz"],
//     address: {
//         street: "201 Main Road",
//         city: "Noida"
//     }
// }

// let {
//     firstName: fn,
//     age,
//     friends: [f1, f2, f3],
//     address: {
//         street: st,
//         city: ct
//     }
// } = user;

// console.log(fn, age, f1, f2, f3, st, ct);



// let user = {
//     firstName: "Foo",
//     age: 32,
//     friends: [
//         { name: "Bas", age: 34 }, 
//         { name: "Baz", age: 35 }
//     ],
//     address: {
//         street: "201 Main Road",
//         city: "Noida"
//     }
// }



// TEMPLATE STRING

// let username = "Ankush";
// let age = 32;

// console.log(`Hello from ${username}, 

// I'm ${age} years old!`);

// let invoiceNum = 1234;
// let custName = "Kronos";

// function process(args, ...segments){
//     console.log(args, segments);
// }

// process `Processing the invoice Number : ${invoiceNum} for the client ${custName}`







// SYMBOL

// let id1 = Symbol("id");
// let id2 = Symbol("id");

// console.log("COMPARE : ", id1 === id2);

// let user = {
//     name : "Foo"
// }
// user[id1] =101;

// console.log(user);

// for(let key in user){
//     console.log(key);
// }

// let arr = [2,3,4];

// arr[Symbol.iterator] = false;

// for(let item of arr){
//     console.log(item);
// }

// let it = arr[Symbol.iterator]();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());


// Well known Symbols

// let user = {
//     age : 32
// }

// user[Symbol.toPrimitive] = function(hint){
//     if(hint === 'number'){
//         return 32;
//     }
//     return null;
// }

// console.log(user);      // {age : 32}
// console.log(+user);      // NaN

// console.log(typeof (+"10") === 'number');


// let arr = [3,4,5];
// arr[Symbol.isConcatSpreadable] = false;

// console.log([1,2].concat(arr));


// let regEx = /ByeBye/;
// let greet = "/Hello/";

// regEx[Symbol.match] = false;

// console.log(greet.startsWith(regEx));


// let id  = Symbol.for("NewID");
// console.log(typeof id);

// console.log(Symbol.keyFor(id));



// Maps

// let question = new Map();

// question.set("question", "What is latest Javascript officially called ?");
// question.set(1, "ES5")
// question.set(2, "ES6")
// question.set(3, "ES2015")
// question.set(4, "ES7")
// question.set("correct", 3);
// question.set(true , "Yipee, Correct Answere.")
// question.set(false , "Try Again.");

// console.log(question.get("question"));

// for(let [key, value] of question.entries()){
//     if(typeof key === 'number'){
//         console.log(`ANS ${key} : ${value}`);
//     }
// }

// process.stdin.on("readable", () => {
//     let chunk = process.stdin.read();
//     console.log(question.get(parseInt(chunk.toString()) === question.get("correct")))
// })






// Iterators

// let user = {
//     name: "Foo",
//     age: 32,
//     [Symbol.iterator]: function () {
//         return {
//             next: function () {
//                 return {
//                     value: 101, done: false
//                 }
//             }
//         }
//     }
// }

// for (let item of user) {
//     console.log(item);
// }


// ID Maker Iterator

// let idMaker ={
//     [Symbol.iterator] : function(){
//         let id = 101;
//         return {
//             next : function(){
//                 let value = id >= 110 ? undefined : id++;
//                 let done = !value;
//                 return {
//                     done , value 
//                 }
//             }
//         }
//     }
// }

// let it = idMaker[Symbol.iterator]();
// let result = it.next();
// while(!result.done){
//     console.log(result)
//     result = it.next();
// }

// for(let id of idMaker){
//     console.log(id);
// }


// Range Maker
// function* process(start, end, step) {
//     for (let i = start; i <= end; i += step){
//         yield i;
//     }
// }

// for(let range of process(200, 220, 2)){
//     console.log(range);
// }

// const it = process(200, 210, 2);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());