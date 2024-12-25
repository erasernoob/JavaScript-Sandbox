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

function onClickItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        console.log('in')
        removeItem(e.target.parentElement.parentElement)
    }
    checkUI()
}

function removeItemFromStorage(item) {
    const text = item.firstChild.textContent
    let items = getItemsFromStorage()
    const newItems = items.filter((e) => e !== text)
     localStorage.setItem('items', JSON.stringify(newItems))
}



function removeItem(item) {
    if (item == null) return
    if (confirm('Are You sure?')) {
        // Delete from the DOM
        item.remove()

        // Delete the LocalStorage
        removeItemFromStorage(item)
    }
}

function clearItem(e) {
    // const childrenList = Array.from(itemList.children)
    const childrenList = [...itemList.children]
    confirm('Are your sure to clear it all?')
    // remove from the DOM
    childrenList.forEach((e) => {
        e.remove()
    })
    // remove the localStorage
    localStorage.removeItem('items')
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

/**
 * create a new Element for the DOM 
 * @param {the new Items Text} item 
 */
function addItemToDOM(item) {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(item))

    const button = createButton('remove-item btn-link text-red')
    li.appendChild(button)

    itemList.appendChild(li)
}

function getItemsFromStorage() {
    let itemsFromStorage = JSON.parse(localStorage.getItem('items'))
    if (itemsFromStorage == null) {
        return []
    }
    return itemsFromStorage
}

/**
 * add the new Item to the localStorage 
 * @param {new Item} item 
 */
function addItemToStorage(item) {
    let itemsFromStorage = getItemsFromStorage()

    itemsFromStorage.push(item)
    
    // convert the array to JSON String
    localStorage.setItem('items', JSON.stringify(itemsFromStorage))
}

function onAddItemSubmit(e) {
    e.preventDefault()
    const newItem = itemInput.value
    if (newItem === '') {
        alert('Please add an item!')
        return
    } 
    addItemToDOM(newItem)

    addItemToStorage(newItem)
    checkUI()
    // disPlayItems()
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

function disPlayItems() {
    const itemsFromStorage = getItemsFromStorage()
    itemsFromStorage.forEach((text) => {
        addItemToDOM(text)
    })
    checkUI()
}

// Initialize app 
function init() {
// Event Listeners
    itemForm.addEventListener('submit', onAddItemSubmit)
    itemList.addEventListener('click', onClickItem)
    clearBtn.addEventListener('click', clearItem)
    filterInput.addEventListener('input', fitlerItem)
    document.addEventListener('DOMContentLoaded', disPlayItems)
    checkUI()
}
init()

