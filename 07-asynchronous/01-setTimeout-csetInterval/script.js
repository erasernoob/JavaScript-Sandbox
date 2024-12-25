// setTimeout(() => {
//     // Callback Function order after the standard function
//     console.log('Hello from callback')
// }, 0)

function changeText() {
    document.querySelector('h1').textContent = 'Hello world'
}

const timeId = setTimeout(changeText, 3000)
console.log(timeId)

document.querySelector('#cancel').addEventListener('click', () => {
    clearTimeout(timeId)
})

// repeatedlly call the  function
// const intervalId = setInterval(myCallback, 1000, 'Hello')

function myCallback(text) {
    if (document.body.style.backgroundColor !== 'black') {
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
    } else {
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    }
}








