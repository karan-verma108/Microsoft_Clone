let express = require('express')
let app = express()
let port = 8000
let mongo = require('mongodb')
let body_parser = require('body-parser')
let cors = require('cors')
let { dbConnect, getData } = require('./Controller/dbController')

// middleware - to use the above two exported modules over here, we need this line of code of a middleware(supporting library)
// here middlewares are body-parser and cors
app.use(body_parser.json())
app.use(body_parser.urlencoded({ extended: true }))
app.use(cors())

// creating the first route
app.get('/', (req, res) => {
    res.send('Hi from Express.js')
})

// Page 1 routes 
app.get('/pcdevice', async (req, res) => {
    let query = {}
    if (req.query.id && req.query.average_rating && req.query.price) {
        query = {
            'id': Number(req.query.id),
            'average_rating': (req.query.average_rating),
            'price': (req.query.price)
        }
    }
    else if (req.query.id) {
        query = { 'id': Number(req.query.id) }
    }
    else if (req.query.average_rating) {
        query = { 'average_rating': (req.query.average_rating) }
    }
    else if (req.query.price) {
        query = { 'price': (req.query.price) }
    }
    let collection = 'PCs and Devices'
    let output = await getData(collection, query)
    res.send(output)
})

app.get('/mouse', async (req, res) => {
    let query = {}
    if (req.query.id && req.query.average_rating && req.query.price) {
        query = {
            'id': Number(req.query.id),
            'average_rating': (req.query.average_rating),
            'price': (req.query.price)
        }
    }
    else if (req.query.id) {
        query = { 'id': Number(req.query.id) }
    }
    else if (req.query.average_rating) {
        query = { 'average_rating': (req.query.average_rating) }
    }
    else if (req.query.price) {
        query = { 'price': (req.query.price) }
    }
    let collection = 'Mouse'
    let output = await getData(collection, query)
    res.send(output)
})

app.get('/keyboard', async (req, res) => {
    let query = {}
    if (req.query.id && req.query.average_rating && req.query.price) {
        query = {
            'id': Number(req.query.id),
            'average_rating': (req.query.average_rating),
            'price': (req.query.price)
        }
    }
    else if (req.query.id) {
        query = { 'id': Number(req.query.id) }
    }
    else if (req.query.average_rating) {
        query = { 'average_rating': (req.query.average_rating) }
    }
    else if (req.query.price) {
        query = { 'price': (req.query.price) }
    }
    let collection = 'Keyboard'
    let output = await getData(collection, query)
    res.send(output)
})

app.get('/webcam', async (req, res) => {
    let query = {}
    if (req.query.id && req.query.average_rating && req.query.price) {
        query = {
            'id': Number(req.query.id),
            'average_rating': (req.query.average_rating),
            'price': (req.query.price)
        }
    }
    else if (req.query.id) {
        query = { 'id': Number(req.query.id) }
    }
    else if (req.query.average_rating) {
        query = { 'average_rating': (req.query.average_rating) }
    }
    else if (req.query.price) {
        query = { 'price': (req.query.price) }
    }
    let collection = 'Webcam'
    let output = await getData(collection, query)
    res.send(output)
})

app.get('/audiodevice', async (req, res) => {
    let query = {}
    if (req.query.id && req.query.average_rating && req.query.price) {
        query = {
            'id': Number(req.query.id),
            'average_rating': (req.query.average_rating),
            'price': (req.query.price)
        }
    }
    else if (req.query.id) {
        query = { 'id': Number(req.query.id) }
    }
    else if (req.query.average_rating) {
        query = { 'average_rating': (req.query.average_rating) }
    }
    else if (req.query.price) {
        query = { 'price': (req.query.price) }
    }
    let collection = 'Headsets and Audio'
    let output = await getData(collection, query)
    res.send(output)
})

// Route for average_rating + price for pcdevice

app.get('/filterpc/:pcdeviceId', async (req, res) => {
    let pcdeviceId =(req.params.pcdeviceId)
    let lprice = (req.query.lprice)
    let hprice = (req.query.hprice)

    if (lprice && hprice) {
        query = {
            'pcdeviceId': (pcdeviceId),
            $and:[{price:{ $gt:lprice,$lt:hprice}}]
        }        
    }
    else {
        query = {}
    }
    let collection = 'PCs and Devices'
    let output = await getData(collection, query)
    res.send(output)
})

// Route for average_rating + price for mouse

app.get('/filterm/:mouseId', async (req, res) => {
    let mouseId =(req.params.mouseId)
    let lprice = (req.query.lprice)
    let hprice = (req.query.hprice)

    if (lprice && hprice) {
        query = {
            'mouseId': (mouseId),
            $and:[{price:{ $gt:lprice,$lt:hprice}}]
        }        
    }
    else {
        query = {}
    }
    let collection = 'Mouse'
    let output = await getData(collection, query)
    res.send(output)
})

// Route for average_rating + price for keyboard

app.get('/filterk/:keyboardId', async (req, res) => {
    let keyboardId =(req.params.keyboardId)
    let lprice = (req.query.lprice)
    let hprice = (req.query.hprice)

    if (lprice && hprice) {
        query = {
            'keyboardId': (keyboardId),
            $and:[{price:{ $gt:lprice,$lt:hprice}}]
        }        
    }
    else {
        query = {}
    }
    let collection = 'Keyboard'
    let output = await getData(collection, query)
    res.send(output)
})

// Route for average_rating + price for webcam

app.get('/filterw/:webcamId', async (req, res) => {
    let webcamId =(req.params.webcamId)
    let lprice = (req.query.lprice)
    let hprice = (req.query.hprice)

    if (lprice && hprice) {
        query = {
            'webcamId': (webcamId),
            $and:[{price:{ $gt:lprice,$lt:hprice}}]
        }        
    }
    else {
        query = {}
    }
    let collection = 'Webcam'
    let output = await getData(collection, query)
    res.send(output)
})

// Route for average_rating + price for audiodevice

app.get('/filterad/:audiodeviceId', async (req, res) => {
    let audiodeviceId =(req.params.audiodeviceId)
    let lprice = (req.query.lprice)
    let hprice = (req.query.hprice)

    if (lprice && hprice) {
        query = {
            'audiodeviceId': (audiodeviceId),
            $and:[{price:{ $gt:lprice,$lt:hprice}}]
        }        
    }
    else {
        query = {}
    }
    let collection = 'Headsets and Audio'
    let output = await getData(collection, query)
    res.send(output)
})

// creating an express server
app.listen(port, (err) => {
    dbConnect();
    if (err) throw err;
    console.log(`Server is running at port : ${port}`);
})