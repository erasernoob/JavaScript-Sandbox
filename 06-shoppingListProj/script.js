const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')
const clearBtn = document.getElementById('clear')
const filterInput = document.getElementById('filter')

function fitlerItem(e) {
    const text = e.target.value.toLowerCase()
    
    const items = itemList.querySelectorAll('li')

    items.forEach((e) => {
        // get the first child
        const itemName = e.firstChild.textContent.toLowerCase()
        if (!itemName.includes(text)) {
            e.style.display = 'none'
        } else {
            e.style.display = 'flex'
        }
    })
}



function removeItem(e) {
    // e.currentTarget is the eventListener's object
    // e.target is the acutal click object
    // if (e.target.tagName != 'i') {
    //     return
    // }
    const button = e.target.parentElement 
    if (button.classList.contains('remove-item') && confirm('Are you sure?')) {
        button.parentElement.remove()
        checkUI()
        return 
    }
}

function clearItem(e) {
    // const childrenList = Array.from(itemList.children)
    const childrenList = [...itemList.children]
    confirm('Are your sure to clear it all?')
    childrenList.forEach((e) => {
        e.remove()
    })
    checkUI()
    // e.target.style.display = 'none'
}


function createButton(className) {
    const newBtn = document.createElement('button')
    newBtn.className = className
    const icon = createIcon('fa-solid fa-xmark')
    newBtn.appendChild(icon)
    return newBtn
}

function createIcon(className) {
    const icon = document.createElement('i')
    icon.className = className
    return icon
}

function addItem(e) {
    e.preventDefault()
    const newItem = itemInput.value
    if (newItem === '') {
        alert('Please add an item!')
        return
    } 
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(newItem))

    const button = createButton('remove-item btn-link text-red')
    li.appendChild(button)

    itemList.appendChild(li)
    checkUI()
    itemInput.value = ''
}

function checkUI() {
    const items = itemList.querySelectorAll('li')
    if (items.length === 0) {
        clearBtn.style.display = 'none'
        filterInput.style.display = 'none'
    } else {
        clearBtn.style.display = 'block'
        filterInput.style.display = 'block'
    }
}

// Event Listeners
itemForm.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)
clearBtn.addEventListener('click', clearItem)
filterInput.addEventListener('input', fitlerItem)


checkUI()

