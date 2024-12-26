const apiUrl = 'https://jsonplaceholder.typicode.com/todos'

const getTodos = () => {
    fetch(apiUrl + '?_limit=10')
        .then(response => response.json())
        .then(data => data.forEach(todo => addToDoToDom(todo)))
}

function addToDoToDom(todo) {
        const div = document.createElement('div')
        div.classList.add('todo')
        div.appendChild(document.createTextNode(todo.title))
        div.setAttribute('data-id', todo.id)

        if (todo.completed) {
            div.classList.add('done')   
        }

        document.getElementById('todo-list').appendChild(div)
}

function createNewTodo (e) {
    e.preventDefault()
    const newToDo =  {
        title: e.target.firstElementChild.value,
        completed: false
    }
    // console.log(e.target.firstChild) get the #Text becuase it returns the whole node not only the element

    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(newToDo),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(res => res.json())
    .then(data => {
        addToDoToDom(data)
    })
    .finally(() => e.target.firstElementChild.value = '')
}

function updateTodo(id, completed) {

}

const toggleComplete = (e) => {
    if (e.target.classList.contains('todo')) {
        e.target.classList.toggle('done')
    }

    // get the tag's atrribute 
    updateTodo(e.target.dataset.id, )

}


const init = () => {
    document.addEventListener('DOMContentLoaded', getTodos)
    document.querySelector('#todo-form').addEventListener('submit', createNewTodo)
    document.querySelector('#todo-list').addEventListener('click', toggleComplete)
    window.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        alert('禁止使用右键')
    })

}

init()

// the way to use the promiseall in async and await
async function getAllDataPromise() {
    const [moivesRes, actorsRes, directorsRes] = await Promise.all([
        fetch('./movies.json'),
        fetch('./actors.json'),
        fetch('./directors.json'),
    ])
    
    const movies = await moivesRes.json()
    const actors = await actorsRes.json()
    const directors = await directors.json()
}