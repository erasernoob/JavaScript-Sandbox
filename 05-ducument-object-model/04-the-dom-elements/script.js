// everything in the dom is a node 

let output

const parent = document.querySelector('.parent')

// get the children
output = parent.children

parent.children[1].style.color = 'red'

// use the firstChildElement
parent.firstElementChild.style.color = 'red' 
parent.lastElementChild.style.color = 'gray'

// Get parent element from a child
const children = document.querySelector('.child')
children.parentElement.style.background.color = 'blue'

// get the Sibling elements 
const secondItem = children.nextElementSibling.style.color = 'green'
children.previousElementSibling.style.color = 'blue'



console.log(output)

