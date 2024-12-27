// bind this 
class App {
    constructor() {
        this.serverName = 'localhost'
        document
            .querySelector('button')
            // do the bind stuff if you want to use the callback function and want to refer it
            // 
            .addEventListener('click', this.getServerName.bind(this))
    }

    getServerName() {
        // the this is refer to the caller
        // and if not bind the this caller is the button
        console.log(this.serverName)
    }
}

const app = new App()
app.getServerName()

class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName
        this._lastName = lastName
    }

    // getter
    get firstName() {
        return this._firstName
    }
    
    set firstName(value) {
        this._firstName = value
    }

    // this is the private method 
    #convertFirstName() {

    }
}

// use case 
const person = new Person()
person.firstName = 'Bai'
console.log(person.firstName)

// the same things construct function
function person(lastName) {
    this._lastName = lastName

    Object.defineProperty(this, 'lastName', {
        get: function () {
            return this._lastName
        }, 
        set: function(lastName) {
            this._lastName = lastName
        }
    }) 
}

// use Object Literal
const PersonObj = {
    _firstName: 'jane',

    get firstName() {
        return this._firstName
    }
}

// Flag descriptor
// 1. configurable 2. enumerable 3. writable 





