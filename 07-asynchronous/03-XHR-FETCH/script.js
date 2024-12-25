const xhr = new XMLHttpRequest()

xhr.open('GET', 'https://api.chuncknorris.io/jokes/random')
/**
 * ready state:
 * status: as the http's status
 */
xhr.onreadystatechange = function() {
    // 4 repersents it's success
    if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText)
        data.forEach(e => {
            const li = document.createElement('li')
            li.innerHTML = `<strong>${e.name}</strong> : ${e.description}`
            document.querySelector('.results').appendChild(li)
        });
    }
}
xhr.send()