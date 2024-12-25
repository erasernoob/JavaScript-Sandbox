// there is some triky thing in the js's object naming 
const firstName = 'haha'
const lastName = 'object'

// just use the same name with the above variable it can work 
const person = {
    firstName,
    lastName
}
console.log(person)

// desructure
const todo = {
    id: 1,
    title: 'hahah',
    user: {
        name: 'John'
    }
}

const { id, title, user: { name } } = todo

// and we can destructure the array

const numbers = [2, 3, 4, 5]

// rest operator
const [first, second, ...rest] = numbers




