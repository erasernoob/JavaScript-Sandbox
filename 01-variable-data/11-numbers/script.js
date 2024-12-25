let x 

const num = new Number(5.436)

x = num.toFixed(2) // 5.43 string
x = num.toPrecision(3)  // (control the whole bits in integer) 5.44
x = num.valueOf()


console.log(x)