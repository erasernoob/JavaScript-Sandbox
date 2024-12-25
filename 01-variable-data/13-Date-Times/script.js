let d

d = new Date()

d = new Date(2021, 0, 10, 12, 30, 0) // month is zero based

d = d.getTime() // get the timeStamp

d = new Date(2021, )

// by default the timeStamp is milisecond 
d = Date.now() // get the timestamp


console.log(d, typeof d)

let x

d = new Date()

x = d.getFullYear()
x = d.getTime()
x = d.getDate() //  give the day of the month
x = d.getDay() // get the date of the week
x = d.getMilliseconds()

x = Intl.DateTimeFormat('default').format(d) // 

x = d.toLocaleDateString('default', {
    weekday: "short", // "Sunday" or short -> sun
    month: 'numeric'
})

console.log(x)