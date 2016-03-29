'use strict';
//example 1: return value as shorthand
function person(name, lastname) {
  let fullName = name + " " + lastname;
  return {name, lastname, fullName}
}

let p = person("Imran", "Aliyev");

console.log(p.name);
console.log(p.lastname);
console.log(p.fullName);

//example literal as shorthand
let age = 30;
let employee = "Eric";

let emp = {employee, age};

console.log(emp.age);
