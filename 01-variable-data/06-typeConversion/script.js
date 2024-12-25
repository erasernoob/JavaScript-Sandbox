// explicitly convert type
let amount = '100'

// change string to number
// amount = parseInt(amount)
// amount = +amount
// amount Number(amount)

// change number to string
// amount is the primitive type so it's not object, but it can use the tostring method
// because there is the wrapper around it(primitive type)
// amount = amount.toString()

amount = Boolean(amount)


console.log(amount, typeof amount)








