const { application } = require('express')
const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')

//static assets
app.use(express.static('./methods-public'))

//parse data
app.use(express.urlencoded({extended: false}))

//parse json
app.use(express.json())

//Requests from similar base paths route have been grouped together in routes folder
app.use('/api/people', people) //(base path, middleware) //setting up the middleware
app.use('/login', auth)

app.listen(5000, () => {
    console.log('Server is listening on port 5000')
})

