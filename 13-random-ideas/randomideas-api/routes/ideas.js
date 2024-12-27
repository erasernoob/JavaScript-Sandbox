const express = require('express')
// use the router 
const router = express.Router()
// when you are using the model capitalized the first character
const Idea = require('../models/Ideas')

const ideas = [
  {
    id: 1,
    text: 'Positive NewsLetter, a newsletter that only shares positive, uplifting news',
    tag: 'Technology',
    username: 'TonyStark',
    date: '2022-01-02',
  },
  {
    id: 2,
    text: 'Milk cartons that turn a different color the older that your milk is getting',
    tag: 'Inventions',
    username: 'SteveRogers',
    date: '2022-01-02',
  },
  {
    id: 3,
    text: 'ATM location app which lets you know where the closest ATM is and if it is in service',
    tag: 'Software',
    username: 'BruceBanner',
    date: '2022-01-02',
  },
];



/**
 *  to get the whole ideas
 * */ 
router.get('/', async (req, res) => {
    try {
        const data = await Idea.find()
        res.json({success: true, data: data})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message: 'Server Internal Error'})
    }
})



/* get a single idea
 */
router.get('/:id', async (req, res) => {
    // const data = ideas.find((idea) => idea.id === +req.params.id) // use the + operator to convert string to number
    // if (!data) {
    //     return res.status(404).send({message: 'Resource Not Found', success: false})
    // }
    // res.json({success: true, 'data': data})

    try {
        const idea = await Idea.findById(req.params.id) 
        res.json({data: idea, success: true})
    } catch (error) {
        res.status(500).json({success: false, message: 'Server Internal Error'})
    }
})

router.delete('/:id', async (req, res) => {
    // const data = ideas.find((idea) => idea.id === +req.params.id) // use the + operator to convert string to number
    // if (!data) {
    //     return res.status(404).send({message: 'Resource Not Found', success: false})
    // }
    // ideas.splice(ideas.indexOf(data), 1)
    // res.json({success: true, data: {}})
    try {
        const data = await Idea.findByIdAndDelete(req.params.id)
        res.json({success: true, data: {}})
    } catch (error) {
        res.status(500).json({success: false, message: 'Server Internal Error'})
    }
    
    
 })

router.put('/:id', async (req, res) => {
    // const data = ideas.find((idea) => idea.id === +req.params.id) // use the + operator to convert string to number
    // if (!data) {
    //     return res.status(404).send({message: 'Resource Not Found', success: false})
    // }
    // // delete the element in the array 
    // ideas.splice(ideas.indexOf(data), 1)
    // const newData = {
    //     id: data.id,
    //     text: req.body.text,
    //     tag: req.body.tag,
    //     username: req.body.username,
    //     date: new Date().toISOString().slice(0, 11)
    // }
    // ideas.push(data)
    try {
        const updatedIdea = await Idea.findByIdAndUpdate(
            req.params.id, 
            {
                $set: {
                    text: req.body.text,
                    tag: req.body.tag
                }
            },
            {new: true}
        )
        console.log(updatedIdea)
        res.json({success: true, data: " "})
    } catch (error) {
        console.log(error)
        res.status(500).send({message: 'Server Internal Error Add new Idea failed', success: false})



    }
 })


/**
 * add a new idea 
 */
router.post('/', async (req, res) => {
    
    const data = new Idea({
        text: req.body.text,
        tag: req.body.tag,
        username: req.body.username,
    })
    console.log(req.body)

    try {
        const savedIdea = await data.save()
        res.json({success: true, data: savedIdea})
    } catch (error) {
        console.log(error)
        res.status(500).send({message: 'Server Internal Error Add new Idea failed', success: false})
    }
})


module.exports = router

