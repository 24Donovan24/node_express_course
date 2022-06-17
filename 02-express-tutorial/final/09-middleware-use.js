const express = require('express')
const app = express()
const logger = require('./logger') //export module logger from another file
const authorize = require('./authorize')
//  req => middleware => res

//app.use(logger) //By using app.use(logger), it will invoke for all routes and hence only need to do it once 
                //1. (Take note ORDER MATTERS, ONLY routes below app.use(logger) will be applied)
                //2. If use 2 arguments eg. app.use('/api', logger), logger will only be applied to all routes after /api. (base of path matches)


app.use([logger, authorize])  //multiple middleware
// api/home/about/products
app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
