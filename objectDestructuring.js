'use strict';

function getPerson(name, lastname) {
  return {
    name: name,
    lastname: lastname,
    fullName: name + " " + lastname
  }
}

let {
  name,
  lastname,
  fullName
} = getPerson("Imran", "Aliyev");

console.log(name);
console.log(lastname);
console.log(fullName);
