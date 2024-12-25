// iife stands for the title 
(function () {
    const user = 'John'
    console.log(`Hello from the iife! ${user}`)
})(); // use the parentheses to invoke the iife


// this will  work too
((name) => {
    const str = `Wokao ${name}`
})('man');

(function (name) {
    const str = `Wokao, ${name}`
    console.log(str)
})('yuanhua');

// give the iffe name function
(function hello () {
    console.log('hello')
})();

// notice this one need to add semicon above the code and the below code 

