const user = {
    firstName : "Nitesh",
    lastName : "Prajapati",
    age:20,
}
// optional chaining

// console.log(user.adress);// It is will execute and It will give undefined
// console.log(user.adress.city);// It will give error bcoz we are checking directly in the user adress and in the city cannot read properties of undefined city
// console.log(user.adress?.city); // It will not give error it will give undefined bcoz there is no address in user object
// --> execution flow -> the code will check if user ke andar adress exists karta hai to city ko check karo warna mat kro that is optional chaining prevent from errors

// const arr = [];
// arr.push(1);
// arr.push("2");
// const arr2 = arr.forEach(el => {
//     el = el+2;
// });
// console.log(arr2);


// A closure is a function that remembers the variables from its outer scope even after the outer function has finished executing.

function outer() {
  let counter = 0; // parent scope variable

  function inner() {
    counter++;
    console.log(counter);
  }

  return inner;
}

// Here what we are doing is that we have taken two function outer and inner and in the outer function we have initialized a varialbe counter with value 0 a
// and then we have taken a function inner where we are incrementing the count value with  and logging the value and in the next line we are returning the innerfunction to outer function
// and after next line we are calling the function and storing it in variable after outer function is closed the outer function is destroyed the but the inner function still have the access of variables of outer function


const fn = outer(); 
fn(); 
fn(); 
fn(); 


