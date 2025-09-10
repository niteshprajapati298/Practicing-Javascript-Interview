// console.log('Value of Age is:',age);
// // Answer -> first line will give output of age is undefined
// // why - > bcoz in javascript var variables are hosted at top of the javascript file

// var age = 20;
// console.log("Value of Age is :", age);
// // and this will print the value of age 

// console.log("The value of Num is ",num);
// let num = 10;
// console.log("The value of num is :", num);

myFun();
var myFun = function () {
    console.log("first");
    
}
myFun();
function myfun() {
    console.log("Second");
    
}
myFun();

// Second Question
var variable = 10;
(function () {
    console.log(variable);
    variable = 20;
    console.log(variable);
})();
console.log(variable);
var variable = 30;