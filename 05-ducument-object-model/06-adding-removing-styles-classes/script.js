const text = document.querySelector('p')

const itemList = document.querySelector('.item-list')

const items = document.querySelectorAll('li')

const button = document.querySelector('button')
button.onclick = run

function run() {

    // get the ClassList and change it
    text.classList.toggle('dark')
    text.classList.toggle('hidden')
}