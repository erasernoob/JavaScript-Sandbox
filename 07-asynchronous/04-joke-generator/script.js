function generateJoke() {
    const xhr = new XMLHttpRequest()
    const div = document.getElementById('joke')

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random')

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const data = JSON.parse(this.responseText)
            div.innerHTML = `<p>${data.value}</p>`
        }
    }
    xhr.send()
}

document.querySelector('button').addEventListener('click', generateJoke)
// generateJoke()
document.addEventListener(DOMContentLoaded, )

