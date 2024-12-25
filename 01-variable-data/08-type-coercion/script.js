let x

x = 5 + '5' // 55 string

x = 5 + Number('5') // 55 number

x = 5 * '5' // 25 number

x = 5 + false // 5 number

x = 0 + true // 1 number

console.log(x, typeof x)