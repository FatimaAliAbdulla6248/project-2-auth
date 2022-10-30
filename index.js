const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')
const db = require('./models')
const cryptoJS = require('crypto-js')
require('dotenv').config()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const path = require('path');

// MIDDLEWARE
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(bodyParser.json())
app.use(ejsLayouts)
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));

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
app.use('/rates', require('./controllers/rates'))
 

// ROUTES
 
//If the user logged in >> it will open the tickets page (ticket.ejs)
app.get('/', async (req, res)=>{
    if(res.locals.user){
        const tickets = await db.ticket.findAll()
        res.render('ticket', {tickets}) 
    }else{
        res.render('home')
    }
})



app.get('/', function (req, res){
     res.sendFile(path.join(__dirname, 'layout.ejs'));
});





 

app.listen(8000, ()=>{
    console.log('FAA AIRLINES IS RUNNING !')
})