// this is the common js syntax
const { message, capitalizeWord } = require('./modules/utils')
const Person = require('./Person')
console.log(message)
console.log(capitalizeWord('hello world json'))
const person = new Person('xiaoming', 234)
