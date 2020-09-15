// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }

class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const person = {
  name: "Jason",
  age: 33,
  gender: "male",
};

const amy = new Human("Amy", 29, "female");

const sayHello = (person: Human): string => {
  return `hello ${person.name}, you are ${person.age}, and you are a ${person.gender}.`;
};

// protects number of arguments
console.log(sayHello(amy));

// put '?' at the end of an argument to take undefined as a value.
// gender?

// show this willbe used as a module.
export {};
