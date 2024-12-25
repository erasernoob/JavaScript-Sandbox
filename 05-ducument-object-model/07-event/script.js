const clearBtn = document.querySelector('#clear')

function onClear () {
    const itemList = document.querySelector('ul')
    const items = itemList.querySelectorAll('li')
    items.forEach((item) => item.remove())
}

// clearBtn.onclick = () => alert('LISTENING!!')

// add EventListener which is a more modern way
clearBtn.addEventListener('click', onClear)

// async methods as the setTimeout for 5s
// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000)

// click event
// setTimeout(() => clearBtn.click(), 1000)