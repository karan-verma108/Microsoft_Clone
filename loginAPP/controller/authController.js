const express = require('express') // for numerous routes
const bodyParser = require('body-parser')  //to parse the body: read POST requests data
const jwt = require('jsonwebtoken') // to generate the token
const bcrypt = require('bcryptjs')  // to encrypt the password 
const config = require('../config')
const User = require('./model/userSchema')
const router = express.Router()

// whatever we pass in the body, this "body-parser" is required to access it 
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

// list of all users 
router.get('/users', (req, res) => {
    User.find({}, (err, user) => {
        if (err) throw err
        res.send(user)
    })
})

// register the user 
router.post('/register', (req, res) => {
    let hashpassword = bcrypt.hashSync(req.body.password, 8)
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashpassword,
        phone: req.body.phone,
        role: req.body.role ? req.body.role : 'User'
    }, (err, result) => {
        res.status(200).send('Registration Successful !')
    })
})

// login user 
router.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) return res.status(500).send({ auth: false, token: 'There is problem while login' })
        if (!user) return res.status(201).send({ auth: false, token: 'No user found, You must register first' })
        else {
            const passIsValid = bcrypt.compareSync(req.body.password, user.password)
            if (!passIsValid) return res.status(201).send({ auth: false, token: 'Password is not valid' })
            let token = jwt.sign({ id: user._id }, config.secert, { expiresIn: 86400 }) //jwt.sign() - to generate the token
            return res.status(200).send({ auth: true, token })
        }
    })
})

// to get user info 
router.get('/userInfo', (req, res) => {
    let token = req.headers['x-access-token']
    if (!token) return res.status(201).send({ auth: false, token: 'No token provided' })
    jwt.verify(token, config.secert, (err, data) => {
        if (err) return res.status(201).send({ auth: false, token: 'Invalid token' })
        User.findById(data.id, (err, user) => {
            res.send(user)
        })
    })
})

module.exports = router // to use this router in other files/modules