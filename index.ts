console.log("hello");
const name = "Jason",
  age = 33,
  gender = "male";

const sayHello = (name: string, age: number, gender: string): string => {
  return `hello ${name}, you are ${age}, and you are a ${gender}.`;
};

// protects number of arguments
console.log(sayHello(name, age, gender));

// put '?' at the end of an argument to take undefined as a value.
// gender?

// show this willbe used as a module.
export {};
