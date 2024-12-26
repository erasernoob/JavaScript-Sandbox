fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

function createPost({title, body}) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            body
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
}

createPost({title: 'myTitle', body: 'and this is my body'})



