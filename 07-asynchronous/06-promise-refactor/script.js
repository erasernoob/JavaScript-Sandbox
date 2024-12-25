// document.querySelector('button').addEventListener('click', (e) => e.target.classList.toggle('danger'))

// call our own callback function 

const posts = [
    {title: 'post1', body: 'This is post one'},
    {title: 'post2', body: 'This is post two'}
]

function createPost(post) {
    return new Promise((resovle, reject) => {
        setTimeout(() => {
            posts.push(post)
            resovle('I am passed')
        }, 2000)
    })
}

function getPost(text) {
    console.log(text)
    setTimeout(() => {
        posts.forEach((post) => {
            const div = document.createElement('div')
            div.innerHTML = `<strong>${post.title}</strong> : ${post.body}`
            document.querySelector('#posts').appendChild(div)
        } )
    }, 1000)
}

createPost({title: 'post3', body: 'This is post on3'})
    .then(getPost) // the function will receive the resolve'argments as the arguments

// new Promise()

