"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("hello");
const name = "Jason", age = 33, gender = "male";
const sayHello = (name, age, gender) => {
    return `hello ${name}, you are ${age}, and you are a ${gender}.`;
};
// protects number of arguments
console.log(sayHello(name, age, gender));
//# sourceMappingURL=index.js.map