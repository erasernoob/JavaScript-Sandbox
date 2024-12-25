// Element
// Attr(attribute)
// Text
// comment 

let output 

const parent = document.querySelector('.parent')
output = parent.childNodes // get the wholeNodeList
// includes Text(the white space in html) comment div.child
console.log(output)

// CREATE ELEMENT
const div = document.createElement('div')
div.className = 'my-element'
div.id = 'my-element'

// create a New Element and append it to the DOM
const text = document.createTextNode('Hello World')
div.appendChild(text)
document.querySelector('h1').appendChild(div)



