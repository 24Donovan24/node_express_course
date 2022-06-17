//Setting up server with just HTTP modules but not efficient when there are many resources
//Therefore, make use of Express Framework


const http = require('http')
const {readFileSync} = require('fs')

//get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
    //console.log(req.method) (to get the http request type)
    //console.log(req.url) (gettin the url back, eg '/' is homepage)
    const url = req.url
    //Home page
    if (url == '/') {
        res.writeHead(200, {'content-type' : 'text/html'}) //status codes, headers (key-value pairs). /html indicates you are sending back in html, 
        //if /plain it will be just texts
        //res.write('<h1>home page</h1>')
        res.write(homePage)
        res.end() //MUST be called at the end of each response
    } 
    //Style
    else if (url == '/styles.css') {
        res.writeHead(200, { 'content-type' : 'text/css'})
        res.write(homeStyles)
        res.end()
    }

    //Logo
    else if (url == '/logo.svg') {
        res.writeHead(200, { 'content-type' : 'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }

    //Logic
    else if (url == '/browser-app.js') {
        res.writeHead(200, { 'content-type' : 'text/javascript'})
        res.write(homeLogic)
        res.end()
    }

    //404
    else {
        res.writeHead(404, { 'content-type' : 'text/html'})
        res.write('<h1>page not found</h1>')
        res.end()
    }
})

server.listen(5000)