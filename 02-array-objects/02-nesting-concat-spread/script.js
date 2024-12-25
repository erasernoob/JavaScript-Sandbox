// nest the arr
const fruits = ['apple', 'pear', 'orange']
const berries = [1, 2, 3]

// fruits.push(berries)

// concatenate the two different other arrays
let x = fruits.concat(berries)

// !!!!!!! Spread Operator (....)
x = ['apple', ...fruits, ...berries] // takes arr's item (like the concatente)

// Flattern Arrays (cancel the nested arr to flat)

// Static Method on Array Object
x = Array.isArray('Hello')
x = Array.from('12345') // [1, 2, 3, 4, 5]

console.log(x)

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [5, 6, 7, 8, 9, 10]

x = [...arr1, ...arr2]

console.log(arr1.concat(arr2.slice(1)))



