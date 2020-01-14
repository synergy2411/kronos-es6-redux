// node -v
// npm -v

// Node installer provides :
// NRE
// NPM
// Native Modules (path, http, os, events etc)

// console.log("Hello World!");

// var x = "some String";
// console.log(typeof x);
// x = true;
// console.log(typeof x);
// x = 123;
// console.log(typeof x);

// var x = "25";
// var y = 10;
// var z = 5;
// console.log(x + y);       // 2010
// console.log(x - y + z);       // ?
// console.log(x + z - y );       // ?

// Objects : Literal, Constructor, Instance


// var myBooks = ["book1", "book2", "book3"];
// var box = {
//     width : 2,
//     heigth : 4,
//     length : 6,
//     books : myBooks
// }

// box.books.push("book4");

// console.log(box.books.length);      // ?
// console.log(myBooks.length);           // ?


// Constructor Pattern: 
// ES5
// function Person (firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.greet = function(){
//         return "Hello " + this.firstName + " " + this.lastName; 
//     }
// }

// var foo = new Person("Foo", "Bar");
// console.log(foo.greet());

// ES2015
// class Person6 {
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// walk(){
// console.log("Walking");
// }
// }
// class Student extends Person6{
//     constructor(firstName, lastName, age){
//         super(firstName, lastName)
//         this.age = age;
//     }
//     // constructor(){}              // No function overloading
//     sayHello (){
//         return "Hello " + this.firstName + "! I'm " + this.age + " years old.";
//     }
// }
// var bam = new Student("Bam", "Baz", 32);
// bam.walk();
// // var bam1 = new Student();
// console.log(bam.sayHello());
// // console.log(bam1.sayHello());


// var str = "Some String";

// var str1 = new String("New String");

// str1 = 123;

// console.log(str1.length);       // undefined

// console.log(str.length);            // 11


// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.greet = function(){}
// }
// Person.prototype.greet =   function(){
//     return "Hello " + this.firstName + " " + this.lastName;
// }
// Person.prototype.compareObj = function(obj){
//     if(this.firstName === obj.firstName){
//         return true;
//     }
// }

// var foo = new Person("Foo", "Bar");
// var foo1 = new Person("Foo", "Bar");

// foo.compareObj(foo1);

// console.log(foo === foo1);
// console.log(foo.greet());

// var user = {
//     name : "Foo"
// }

// user.prototype.newValue = "New Value";

// user.newValue = "Some New Value";



// Instance Method

// var Shoe = {
//     size : 8,
//     gender : "Women"
// }

// var magicShoe = Object.create(Shoe);

// console.log(Shoe.isPrototypeOf(magicShoe));
// console.log(magicShoe.isPrototypeOf(Shoe));
// console.log(Object.prototype.isPrototypeOf(Shoe));
// console.log(Object.prototype.isPrototypeOf(magicShoe));

// console.log(Shoe.hasOwnProperty('size'));
// console.log(magicShoe.size);            // 8
// console.log(magicShoe.hasOwnProperty('size'));


// console.log(magicShoe.size);

// magicShoe.size = 10;
// delete magicShoe.size;          // {}
// delete magicShoe.size;

// // console.log(magicShoe);                     // {}
// // console.log(magicShoe.size);               // 8
// // magicShoe.size = 10;
// console.log(magicShoe.size);            // 10
// console.log(Shoe.size);            // ?


// var str = "Some String";
// var str1 = "Hello JS";
// String.prototype.countAll = function(letter){
//     var counter = 0;
//     for(var i =0; i<this.length; i++){
//         if(this.charAt(i).toUpperCase() === letter.toUpperCase()){
//             counter++;
//         }
//     }
//     return counter;
// }

// console.log(str.countAll('s'))          // 2
// console.log(str1.countAll('l'))          // 



// FUNCTION

// function add (){}

// var addition = function (num1, num2){
//     return num1 + num2;
// }

// console.log(addition(2,6));

// function mystery(){
//     var chooseNumber = function (){
//         return 7;
//     }
//     return chooseNumber();
//     var chooseNumber = function(){
//         return 12;
//     }
// }

// console.log(mystery());

// var nestedFunc = mystery();
// console.log(nestedFunc());          // ?


// Closures : 

// function testClosure(){
//     var x = 4;
//     return function(){
//         return ++x;
//     }
// }

// var nestedFunc = testClosure();
// console.log(nestedFunc());          // 5
// console.log(nestedFunc());          // ?
// console.log(nestedFunc());          // ?
// console.log(nestedFunc());          // ?




// var myVar = 100;

// function a(){
//     var myVar = 102;
//     function b(){
//         console.log(myVar);             // ?
//     }
//     b();
// }

// a();


// ES5
// var user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     fullName : function(){
//         var self = this;
//         function nested(){
//             console.log(this);          // Node Global Env / Window object
//             return self.firstName + " "+  self.lastName; 
//         }
//         return nested();
//     }
// }

// console.log(user.fullName());

