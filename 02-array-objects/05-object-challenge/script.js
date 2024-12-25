const library = [
    { title: 'old man and sea', author: 'unkown',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    { title: 'second book', author: 'erasernoob',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    { title: 'one last kiss', author: 'still unkown',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
]
library[0].status.reading = true
library[1].status.reading = true
library[2].status.reading = true

// get the value of the destructure thing
let { title: firstBook } = library[0]
title = 'firstBook'

const str = JSON.stringify(library)

console.log(firstBook)
