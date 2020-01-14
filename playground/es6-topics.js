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


// function demo(){
//     console.log(arguments);
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



var delay = ms => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Here the data comes.")
        }, ms)
    })
}
// Consumer Code
delay(2000).then(resp => console.log("SERVER RESPONSE : " + resp));

// Consumer Code by Async ... await
async function callDelay(){
    var data = await delay(2000);
    console.log("ASYNC FUNCTION :", data)
}

callDelay();


