function fetchUser() {
    fetch('https://randomuser.me/api')
        .then((res) => res.json())
        .then((data) => displayUser(data.results[0]))
}

function displayUser(user) {
    console.log(user)
    if (user.gender === 'female') {
        document.body.style.backgroundColor = 'rebeccapurple'
    } else {
        document.body.style.backgroundColor = 'pink'

    }
    
}

fetchUser()
document.querySelector('#generate').addEventListener('click',fetchUser)