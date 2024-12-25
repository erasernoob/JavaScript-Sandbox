// just get rid of the function and replace it with =>

// function add(a, b) {
//     return a + b
// }

const add = (a, b) => {
    return a + b
}

// Implicit Return
const subtract = (a, b) => a - b

// equal to const double = a => a * 2
const double = (a) => a * 2


// arrow function in callback
const numbers = [1, 2, 3, 4]
numbers.forEach(
    // I am passing a function in a function 
    (n) => {console.log(n)}
)


// Returning an object in the arrow function 
// use the parentheses
const createObj = () => ([
    {
        name: 'ahah'
    },
    {
        age: 'what??',
        name: 'ahah'
    }
])

console.log(createObj())

console.log(add(1, 2))