// the event will bubbling to the parent until to the top document
const button =  document.querySelector('form button') // get the form's child button

const div = document.querySelector('form div:nth-child(2)')

const form = document.querySelector('form')

button.addEventListener('click', (e) => {
  alert('button clicked')
  // stop the bubbling 
  e.stopPropagation()
})

// const 
const list = document.querySelector('ul')

list.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.style.color = 'red'
  }
})