// window.alert = alert in global scope 
// alert('Man')

// scope shadow
const x = 100

function sum() {
    // this will overwrite the global variable x
    const x = 1
    const y = 5
    return  (x + y)
}

console.log(sum())

// var | let | const
// 'var' is not a block scope that's accessible for the outside
// if using the var the varible will be added to window object
