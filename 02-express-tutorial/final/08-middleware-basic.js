const express = require('express')
const app = express()

//  req => middleware => res

const logger = (req, res, next) => { //Middleware (Take note middleware needs to pass on to a next, or send a response back itself(if not page just keeps loading))
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}

app.get('/', logger, (req, res) => { //can call middleware between method type and (req, res) eg. app.get('/', logger, (req, res)...) 
                                     //but not recommended as tedious when have many routes (thus we export it as a module) If want call 2 middlewares, put them in array
  res.send('Home')
})
app.get('/about', logger, (req, res) => {
  res.send('About')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
