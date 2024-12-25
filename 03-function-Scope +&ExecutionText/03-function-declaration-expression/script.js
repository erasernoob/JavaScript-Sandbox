// that work too
console.log(addDollarSign(2))

// Function declaration
function addDollarSign(value) {
    return '$' + value
}

// Function expression
const addPlusSign = function (value) {
    return '@' + value
};

console.log(addPlusSign(2))

// when compile the whole page the function declaration 
// will be put on the top of the whole page, so you can call the function 
// BEFORE THE FUNCTION declaration 
