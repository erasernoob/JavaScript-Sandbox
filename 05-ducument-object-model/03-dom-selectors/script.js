let outputt
// document.getElementById()
output = document.getElementById('h1-element')
console.log(output)

// document.querySelector()
console.log(document.querySelector('h1')) // select single elements
console.log(document.querySelector('#app-title')) // select id
console.log(document.querySelector('.container')) // select single elements className

// USE THE querySelectorAll

const listItems = document.querySelectorAll('.item')
console.log(listItems) // got a the NodeList (something like HTML collection)
console.log(listItems[0]) // use like a array 

// can use the forEach
listItems.forEach((item) => {
   item.style.color = red
})

// or for the index 
listItems.forEach((item, index) => {
   item.style.color = red 
   if (index ==  1) {
      // child Node remove
      item.remove()
   }
})




