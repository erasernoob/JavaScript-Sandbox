/**
 * THE EVENT OBJECT
 * `target` - The element that trigger the event
 * `current Target` - the Element that the event Listener is attached to 
 * `client X Y` => Brower viewport
 * 'Page X' => entire document
 * 'Screen X Y' => Entire screen
 */
const logo = document.querySelector('img')

logo.addEventListener('click', function(e) {
    console.log(e)
    // client
    console.log(e.clientX)
    // within the element's offset
    console.log(e.offsetX)
    // the whole page
    console.log(e.pageX)
    // the whole monitor
    console.log(e.screenX)
})

const h1 = document.querySelector('h1')
const tmpText = h1.innerText

logo.addEventListener('drag', (e) => {
    h1.innerText = `X: ${e.clientX} Y: ${e.clientY}`
})
logo.addEventListener('dragend', (e) => {
    h1.innerText = tmpText
})


document.querySelector('a').addEventListener('click', (e) => {
    // prevent the default behavior like jump to the key
    e.preventDefault()
    // do this 
    console.log('prevent the default behavior!')

})

// keyBoard EVENT
const itemInput = document.querySelector('input')
itemInput.addEventListener('keypress', (e) => {
    console.log(e.code)
})
itemInput.addEventListener('keydown', (e) => {
    if (e.repeat === 'Digit1') {
        console.log('You pressed 1')
    }
    // and detest the other key
    console.log(`shift: ${e.shiftKey}`)
    console.log(`ctrl: ${e.ctrlkey}`)
    console.log(`alt: ${e.altKey}`)

})
itemInput.addEventListener('keyup', (e) => {
})