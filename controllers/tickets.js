const express = require('express')
const db = require('../models')
const router = express.Router()

router.get('/home', (req, res)=>{
    res.render('ticket.ejs')
})


module.exports = router