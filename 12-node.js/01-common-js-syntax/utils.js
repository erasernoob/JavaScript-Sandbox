const message = {
    name: 'name',
    text: 'Hello From the NPM'
}

function capitalizeWord (words) {
    return words
            .split(' ')
            .map((word) => word[0].toUpperCase() + word.substr(1))
            .join(' ')
}

// console.log(capitalizeWord('hello world'))

// use the common.js syntax 
module.exports = {
    message,
    capitalizeWord, 
}
