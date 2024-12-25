// Primitive Data Types
// 1. String
// 2. Number (everything is a number is javascript)
// 3. Boolean
// 4. Null
// 5. Undefined 
// 6. Symbol
// 7. BigInt (Numbers that are great than the Number)

// Reference Types
// Arrays | Functions | Objects

// Primitive: Store the value directly in the stack

const name = 'john'
const age = 30

// Reference: Store the actual value in the heap, the varaible's name store in the stack and it refer 
// to the heap  

const person = {
    name: 'Brad',
    age: 40
}

let newPerson = person  
newPerson.name = 'Sarah'











