interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "Jason",
  age: 33,
  gender: "male",
};

const sayHello = (person: Human): string => {
  return `hello ${person.name}, you are ${person.age}, and you are a ${person.gender}.`;
};

// protects number of arguments
console.log(sayHello(person));

// put '?' at the end of an argument to take undefined as a value.
// gender?

// show this willbe used as a module.
export {};
