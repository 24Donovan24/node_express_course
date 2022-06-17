const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('user hit the resource')
    res.status(200).send('Home Page') //Add in .status() to specify what status code to send
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

app.all('*', (req, res) => { //'all' to handle all requests
    res.status(404).send('<h1>resource not found</h1>') //pass in status 404 if error before sending, if not will default to 200
})

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen
