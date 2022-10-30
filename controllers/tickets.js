const express = require('express')
const db = require('../models')
const router = express.Router()
const axios = require('axios')

router.get('/', (req, res)=>{
    res.render('ticket.ejs')
})

//-----API-----
router.get('/home', async (req,res) => {
    try {
        // let APIData = await axios.get('https://test.api.amadeus.com/v1/shopping/seatmaps?flightOrderId={flightOrderId}')
        
       let APIData= await axios.get('https://test.api.amadeus.com/v1/shopping/seatmaps?flightOrderId={}', {
            headers: {
              'Authorization': 'Bearer 9vPRHbQ25TaXkfGAMtIm7E7QuWUs'
            }
          })

        let Results = APIData.data
        //res.render('home.ejs', {Results})
        res.json(Results)
    } catch (err) {
        res.send(err)
    }

    //res.json()

})


 




module.exports = router