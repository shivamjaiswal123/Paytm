const express = require('express')
const app = express()
const cors = require('cors')
const userRouter = require('./routes/user.router')
const accountRouter = require('./routes/account.route.js')

app.use(express.json())
app.use(cors())

//routes
app.use('/api/v1/user', userRouter)
app.use('/api/v1/account', accountRouter)


module.exports = app

