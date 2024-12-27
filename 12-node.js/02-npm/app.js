const axios = require('axios')

const getData = async () => {
    const res = await axios.get('http://api.github.com/users/erasernoob')
    console.log(res.data)
}

getData()
getData()