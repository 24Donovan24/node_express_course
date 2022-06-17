const express = require('express')
const router = express.Router()

router.post('/', (req, res) => { //If in app.js, app.use(/login, auth), the url will be '/'(root) instead of the original 
    const {name} = req.body
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    //console.log(req.body)
    res.status(401).send('Please provide credentials')
})

module.exports = router //Export module