// JS use the wrapper around the primitive string make it become the string object 
// Just like const string = new String('Hello world')
let x

const name = 'John'
const age = 30

x = 'Hello, my name is' + name + ' and I am ' + age

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`

// String Properties and Methods
const s = 'Hello world'

// to get the Object protoType

x = s.__proto__

x = s.toUpperCase()
x = s.toLowerCase()

x = s.indexOf('e')
x = s.charAt(2)

x = s.substring(0, 4)
x = s.substring(5) // start from the 5 position

// slice can use the negative number to specify 
x = s.slice(0, -6)

// trim the front blank space
x = s.trim()

x = s.replace('World', 'John')

x = s.includes('hello')

// to get the very primitive value of the stirng object 
x = s.valueOf()

x = s.split(' ') // ['Hello', 'World']


console.log(x)



