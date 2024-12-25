let x

x = Math.floor(4.5) // 4 round to floor
x = Math.ceil(4.2) // 5 round to ceil
x = Math.round(4.6) // normally

x = Math.random() * 10 // decimal 0 to 9 3.8478408654028917
x = Math.floor(Math.random() * 10 + 1) // int 1 to 10

console.log(x)

x = Math.floor(Math.random() * 100 + 1)    
let y = Math.floor(Math.random() * 50 + 1)

const sumOutPut = `${x} + ${y} = ${x + y}`
const differenceOutput = `${x} - ${y} = ${x - y}`
console.log(sumOutPut)
console.log(differenceOutput)

