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

const fn = outer(); 
fn(); 
fn(); 
fn(); 


