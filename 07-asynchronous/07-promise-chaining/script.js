new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            // receive some object result  pass to resolve 
            resolve({name: 'John', age: 30})
        } else { 
            reject('something wrong')
        } 
    }, 1000)
})
// chain for the promise
.then((user) => user.name)
.then((name) => {
    console.log(name)
    return name.length
})
.then((length) => {
    console.log(length)
})
.catch((error) => {
    console.log(error)
    return 123
})
.then((text) => {
    console.log(text)
})
.finally(() => {
    // release some the resource needed to be release
    console.log('The Promise has been resolved or reject, I am finally result')
})

// the way to use the Promise all 
Promise.all(moviePromise, actorsPromise, directorPromise).then(
    (data) => {
        // 
        console.log(data)
    }
)
    