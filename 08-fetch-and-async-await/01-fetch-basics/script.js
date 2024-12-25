// What Fetch method do is the Promise
fetch('./movie.json')
    .then((response) => response.json())
    .then((data) => console.log(data))
fetch('./test.txt')
    .then((response) => response.text())
    .then((data) => console.log(data))
fetch('https://api.github.com/users/erasernoob/events{/privacy}')
    .then((response) => response.json())
    .then((data) => console.log(data))






