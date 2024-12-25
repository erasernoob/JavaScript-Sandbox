const socials = ['X', 'LinkedIn', 'Facebook', 'Instagram']

// forEach
// socials.forEach((item) => console.log(item))

// additional params (elements, index, the whole arr)
// socials.forEach((item, index, arr) => console.log(`${index} : ${item}`))

 

// FILTER
// pass the fucntion and the will return a result
const res = socials.filter((item, index, arr) => {
})
console.log(res)

// same as the forEach
let result = []
 socials.forEach((item) => {
    if (item.length > 4) {
        result.push(item)
    }
})

// Map return an array like filter but not real like 
// we can diy what we want to return that is the big diffrence with the filter
const arr = socials.map((item) => item += '2')
console.log(arr)

// Chain MAP methods
// Chain Map is AwSome
const chainRes = socials
    .map((item) => item += '2')
    .map((item) => item += '3')
console.log(chainRes)

// Chaining diffrent Methods
const chainResult = socials
    .filter((item) => item.length > 2)
    .map((item) => item += '2')
console.log(chainResult)

// Reduce methods just as the reducers
const numbers = [1, 2, 3, 4, 5 ,6 ,7, 8 ,9, 10]

// start from the 0 index
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0)
console.log(sum)

const cart = [
    { id: 1, name: 'Product 1', price: 1 },
    { id: 2, name: 'Product 1', price: 3 },
    { id: 3, name: 'Product 2', price: 9 }
]

// use the reduce to get the whole prices of the cart
// params(accumulator, currentValue, initialValue)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// Initial Value: You can set an initial value for the accumulator.
const sum1 = cart.reduce((acc, cur) => acc + cur.price, 0)
console.log(sum1)














