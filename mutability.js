const person = {
  name: 'Rick',
  age: 77,
  country: 'US',
}

const clone1 = {...person}
const clone2 = {...person}
Object.freeze(clone1)
Object.freeze(clone2)

// console.log(clone1)
// console.log(clone2)

const samePerson = person
samePerson.age += 1 ;
samePerson.country = 'FR';

console.log(person)
