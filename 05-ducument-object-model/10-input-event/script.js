const itemInput = document.getElementById('item-input')
const priorityInput = document.getElementById('priority-input')
const checkbox = document.getElementById('checkbox')
const heading = document.querySelector('h1')

function onInput(e) {
    // e.target = <input></input>
    heading.innerText = e.target.value
}

function onCheck(e) {
    // the another property target.checked
    heading.textContent = e.target.checked
} 

function onFocus(e) {
    heading.style.color = 'red'
    itemInput.style.outlineStyle = 'solid'
}

function onBlur(e) {
    console.log('input is not forcused')
}

itemInput.addEventListener('input', onInput)
priorityInput.addEventListener('change', onInput)
checkbox.addEventListener('input', onCheck)
itemInput.addEventListener('focus', onFocus)
itemInput.addEventListener('blur', onBlur)


