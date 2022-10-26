const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')
const db = require('./models')
const cryptoJS = require('crypto-js')
require('dotenv').config()

// MIDDLEWARE
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(ejsLayouts)
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))

// AUTHENTICATION MIDDLEWARE
app.use(async (req, res, next)=>{
    if(req.cookies.userId) {
        const decryptedId = cryptoJS.AES.decrypt(req.cookies.userId, process.env.SECRET)
        const decryptedIdString = decryptedId.toString(cryptoJS.enc.Utf8)
        const user = await db.user.findByPk(decryptedIdString)
        res.locals.user = user
    } else res.locals.user = null
    next()
})

// CONTROLLERS
app.use('/users', require('./controllers/users'))
app.use('/tickets', require('./controllers/tickets'))
 

// ROUTES
//????????????????????????????????????????????????????????????
//If the user logged in >> it will open the tickets page (ticket.ejs)
app.get('/', (req, res)=>{
    if(res.locals.user){

        //destinations = await db.ticket.findAll.. .. 

        res.render('ticket') // add data)
    }else{
        res.render('home')
    }
})

 

app.listen(8000, ()=>{
    console.log('FAA AIRLINES IS RUNNING !')
})