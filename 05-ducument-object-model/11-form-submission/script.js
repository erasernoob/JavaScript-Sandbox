// what we are dealing with is the frontend JavaScript

const form = document.getElementById('item-form')

function onSubmit(e) {
    e.preventDefault() // prevent from the default action to submit to the whole page and refresh the page

    const item = document.getElementById('item-input').value
    
    const ul = document.getElementById('item-list')
    const newLi = document.createElement('li')
    newLi.innerHTML = `${item}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`
    ul.appendChild(newLi)
}

function onSubmit2(e) {
    e.preventDefault()
    // get the form the formData
    const formData = new FormData(form)
    // the the inputValue name = 'item'
    const item = formData.get('item')
    const priority = formData.get('priority')

}

form.addEventListener('submit', onSubmit2)
