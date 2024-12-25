// default params
function registerUser(user = 'Bot') {
    console.log(
        `${user} hello`
    )
}
// Rest Params
// Rest Params then convert into an array
function sum(...nums) {
    let total = 0
    for (let num of nums) {
        total += num
    }
    return total
}

// Objects as params
