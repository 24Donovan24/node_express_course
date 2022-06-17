const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1><a href = "/api/products">products</a>')
})
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => { //In the case I only want to display partial information
        const {id, name, image} = product
        return {id, name, image}
    })
    res.json(newProducts)
})

// app.get('/api/products/1', (req, res) => { //not viable if we have many products for eg, we will ned create alot of routes
//     const singleProduct = products.find((product =>  product.id === 1))
//     res.json(singleProduct)
// })

app.get('/api/products/:productID', (req, res) => { //Using :productID allows us to account for all the productIDs (account for all routes). USE : with param
    // console.log(req)
    // console.log(req.params)
    const {productID} = req.params

    const singleProduct = products.find((product =>  product.id === Number(productID))) //the params that you get back is a String, 
                                                                                        //hence the need to convert to Number
    if (!singleProduct) {
        return res.status(404).send('Product does not exist')  //Account for undefined cases
    } 
    return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => { //example of more complex route parameters
    //console.log(req.params)
    res.send('hello world')
}) 


//Querying for data (?search ... are not part of the url)
app.get('/api/v1/query', (req, res) => {
    //console.log(req.query)
    const {search, limit} = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts < 1) {
        // res.status(200).send('no products matched your search') //Really depends how you want to handle these cases
        return res.status(200).json({success: true, data: []}) //Put return in conditional statements so that server will not be confused by multiple responses for a single request
    } 

    res.status(200).json(sortedProducts) //Not necessary for return here as it is the last response
    
})



app.listen(5000, () => {
    console.log('server is listening on port 5000')
})