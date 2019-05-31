const express = require('express')
require('./db/mongoose') 
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json()) //takes incoming json from the body of a request

app.post('/users', (req, res)=>{
    const user = new User(req.body)

    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e)=>{
        res.status(400).send(e)
    })
})

app.post('/tasks', (req, res)=> {
    const task = new Task(req.bod)

    task.save().then(()=> {
        res.status(201).send(task)
    }).catch((e)=>{
        res.status(400).send(e)
    })
})

app.listen(port, ()=> {
    console.log('Server is up on port ' + port)
})

