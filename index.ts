console.log("hello");
const name = "Jason",
  age = 33,
  gender = "male";

const sayHello = (name, age, gender) => {
  console.log(`hello ${name}, you are ${age}, and you are a ${gender}.`);
};

// protects number of arguments
sayHello(name, age, gender);

// put '?' at the end of an argument to take undefined as a value.
// gender?

// show this willbe used as a module.
export {};
