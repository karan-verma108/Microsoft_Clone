let express = require('express')
let app = express()
let port = 8000
let mongo = require('mongodb')
let body_parser = require('body-parser')
let cors = require('cors')
let { dbConnect, getData, postData, updateData, deleteData } = require('./Controller/dbController')

// middleware - to use the above two exported modules over here, we need this line of code of a middleware(supporting library)
// here middlewares are body-parser and cors
app.use(body_parser.json())
app.use(body_parser.urlencoded({ extended: true }))
app.use(cors())

// creating the first route
app.get('/', (req, res) => {
    res.send('Hi from Express.js')
})

//first route

// app.get('/alldevice', async(req,res)=>{
//     let query = {}
//     let collection = 'AllDevice'
//     let output = await getData(collection, query)
//     res.send(output)
// })

// Page 1 routes 
app.get('/pcdevice', async (req, res) => {
    let query = {}
    if (req.query.id && req.query.average_rating && req.query.price) {
        query = {
            'id': Number(req.query.id),
            'average_rating': toString(req.query.average_rating),
            'price': toString(req.query.price)
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

app.get('/xbox', async (req, res) => {
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
    let collection = 'Xbox'
    let output = await getData(collection, query)
    res.send(output)
})

app.get('/alldevice', async (req, res) => {
    let query = {}
    if (req.query.id && req.query.average_rating && req.query.price && req.query.category_id) {
        query = {
            'id': Number(req.query.id),
            'average_rating': (req.query.average_rating),
            'price': (req.query.price),
            'cateogory_id' : Number(req.query.category_id)
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
    else if (req.query.category_id) {
        query = { 'category_id': Number (req.query.category_id) }
    }
    let collection = 'All Device'
    let output = await getData(collection, query)
    res.send(output)
})

//Page 3 route > list of devices of selected category

app.get('/devices', async (req, res) => {
    let query = {}
    if (req.query.id && req.query.average_rating && req.query.price && req.query.category_id) {
        query = {
            'id': Number(req.query.id),
            'average_rating': (req.query.average_rating),
            'price': (req.query.price),
            'cateogory_id' : Number(req.query.category_id)
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
    else if (req.query.category_id) {
        query = { 'category_id': Number (req.query.category_id) }
    }
    let collection = 'All Device'
    let output = await getData(collection, query)
    res.send(output)
})


app.get('/devices/:category_id', async (req, res) => {
    let category_id = Number(req.params.category_id)
    
        query = {
            'category_id': Number (req.params.category_id)
        }        
 
    
    let collection = 'All Device'
    let output = await getData(collection, query)
    res.send(output)
})

// Page 4 route > Place order

app.post('/placeOrder', async(req, res)=>{
    let body = req.body
    let collection = 'Orders'
    let response = await postData(collection, body)
    res.send(response)
})

// Page 4 route > Details of selected device (devices wrt id)
app.post('/deviceDetails', async(req, res)=>{
    if(Array.isArray(req.body.id)){
        let query = {id : {$in: req.body.id}}
        let collection = "All Device"
        let output = await getData(collection, query)
        res.send(output)
    } 
    else{
        res.send('Please pass data in form of array')
    }
})



// Page 5 route > List of all orders wrt user

app.get('/orders', async(req, res)=>{
    let query = {}
    let collection = 'Orders'
    if(req.query.email){
        query = {email : req.query.email}
    }
    let output = await getData(collection, query)
    res.send(output)
})

// Page 5 route > update order

app.put('/updateOrder', async(req, res)=>{
    let collection = 'Orders'
    let condition = {"_id": new mongo.ObjectId(req.body._id)}
    let data = {
        $set : {
            'status' : req.body.status
        }
    }
    let output = await updateData(collection,condition,data)
    res.send(output)
})

// Page 5 route > delete order

app.delete('/deleteOrder', async(req,res)=>{
    let collection = 'Orders'
    let condition = {"_id": new mongo.ObjectId(req.body._id) }
    let output = await deleteData(collection, condition)
    res.send(output)
})

// creating an express server
app.listen(port, (err) => {
    dbConnect();
    if (err) throw err;
    console.log(`Server is running at port : ${port}`);
})