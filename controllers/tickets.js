const express = require('express')
const db = require('../models')
const router = express.Router()
const axios = require('axios')

router.get('/', (req, res)=>{
    res.render('ticket.ejs')
})

//-----API-----
// router.get('/home', async (req,res) => {
//     try {
//         let APIData = await axios('https://test.api.amadeus.com/v1/travel/analytics/air-traffic/traveled?originCityCode=MAD&period=2022-01&max=10&page%5Blimit%5D=10&page%5Boffset%5D=0&sort=analytics.travelers.score')
//         let Results = APIData.data.results
//         res.render('home.ejs', {Results})
//     } catch (err) {
//         res.send(err)
//     }

//     //res.json()

// })





module.exports = router