const person = {
    name: 'eprson',
    age: '19'
}

// both way are OK
// console.log(person.name)
// console.log(person['name'])

person.hasChildren = true // can add the property in this way

person.greet = function () {
    console.log(`And it can set the function property ${this.name}`)
}

// person.greet()

let x
const todo = new Object()
todo.id = 1 

const obj1 = { a: 1, b: 2}
const obj2 = { c: 1, d: 2}

// Spread operators F**king cool!
const obj3 = {...obj1, ...obj2}
// the same way
const obj4 = Object.assign({}, obj1, obj2)

// get the object keys
x = Object.keys(obj1) // ['a', 'b']
x = Object.values(obj1)

x = Object.entries(obj1) // get the key-pair as the arr
// Array(2), Array(2)]
// (2) ['a', 1]
// (2) ['b', 2]
console.log(x)



