const express = require('express')
require('./db/mongoose') 
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json()) //takes incoming json from the body of a request
app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=> {
    console.log('Server is up on port ' + port)
})

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({_id:'abc213'}, 'thisismynewcourse', {expiresIn: '7 days'})
    console.log(token)

    const data = jwt.verify(token, 'thisismynewcourse') //get data back
    console.log(data)
}

myFunction()