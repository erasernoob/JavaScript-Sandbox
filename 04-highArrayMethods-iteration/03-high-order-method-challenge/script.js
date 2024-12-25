const persons = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    age: 25
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phone: "234-567-8901",
    age: 14
  },
  {
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael.johnson@example.com",
    phone: "345-678-9012",
    age: 35
  },
  {
    firstName: "Emily",
    lastName: "Davis",
    email: "emily.davis@example.com",
    phone: "456-789-0123",
    age: 28
  },
  {
    firstName: "William",
    lastName: "Brown",
    email: "william.brown@example.com",
    phone: "567-890-1234",
    age: 24
  },
  {
    firstName: "Olivia",
    lastName: "Taylor",
    email: "olivia.taylor@example.com",
    phone: "678-901-2345",
    age: 22
  }
];

/**
 * delete the phone and the age prop
 * get a new prop name combine the firtName and lastName
 */
let result = []
let res = persons
    .filter((item) => item.age <= 25)
    .forEach((item) => {
        let person = {}
        person.name = item.firstName + item.lastName
        person.email = item.email
        result.push(person)
    })
const res1 = persons
    .filter((person) => person.age <= 25)
    .map((person) => ({
        // person.name = person.firstName + person.lastName
        name: person.firstName + person.lastName,
        email: person.email
    }))
console.log(res1)

/**
 * add the positive number to sum
 */
const numbers = [2, -30, 50, 20, -12. -9, 7]

const sum = numbers
    .reduce((acc, number) => {
        acc += number > 0 ? number : 0
        return acc
    }, 0)

console.log(sum)

const words = ['coder', 'programmer', 'developer']

const capitalized = words
    .map((word) => {
        const tmp = word.substring(0, 1).toUpperCase()
        return word[0].toUpperCase() + word.slice(1)
    })
console.log(capitalized)














