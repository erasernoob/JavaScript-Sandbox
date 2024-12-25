const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task complete')
        // 
        resolve()
    }, 1000)
}) 

// the way to handle the promise
promise.then(() => {
    console.log('Promise consumed...')
})

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
.then((user) => console.log(user))
.catch((error) => {
    console.log(error)
})
.finally(() => {
    // release some the resource needed to be release
    console.log('The Promise has been resolved or reject, I am finally result')
})
    