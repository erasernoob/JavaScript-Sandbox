const items = ['book', 'table', 'chari']

// for..of..loop
for(const item of items) {
    console.log(item)
}

// for each loop
items.forEach(e => console.log(e))

const map = new Map()
map.set('name', 'john')

// Loop over the map 
for (const [key, value] of map) {
    console.log(key, value)
}

// for...In loop loop the iteral obj
// forIn get the key of the obj(arr)

const colorObj = {
    color1: 'bule',
    color2: 'black',
    color3: 'yellow',
    color4: 'green'
}

// first get the key
for (const key in colorObj) {
    console.log(key, colorObj[key])
}

// forin of array get the key and the value
for (const item in items) {
    console.log(item, items[item])
}


