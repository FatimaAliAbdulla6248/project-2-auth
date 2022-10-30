const express = require('express')
const db = require('../models')
const router = express.Router()
const axios = require('axios')


router.get('/', (req, res)=>{
    res.render('rate.ejs')
})






// router.post('/',async (req, res)=>{
//     const [newComment, created] = await db.comment.findOrCreate
//     await res.locals.user.addComment(newComment)
//     res.render('/')
    
//})


// router.post('/:pokeId/new', async (req,res) => {
//     // Grab our pokemon
//     const pokemon = await db.pokemon.findByPk(req.params.pokeId)
//     // Create a comment
//     const [newComment, created] = await db.comment.findOrCreate({
//         where: {
//             description: req.body.description
//         }
//     })
//     //Add our comment to the pokemon
//     await pokemon.addComment(newComment)
//     await res.locals.user.addComment(newComment)
//     //redirect to pokemon details page
//     res.redirect(`/pokemon/${req.params.pokeId}`)
//     })
    









// router.post('/', async (req,res) => {
// // Grab our ticket
// const ticket = await db.ticket.findByPk(req.params.ticketId)
// // add a rate 
// const [newRate, created] = await db.rate.findOrCreate({
//     where: {
//         comment: req.body.comment
//     }
// })
// //Add our comment to the ticket
// await ticket.addRate(newRate)
// await res.locals.user.addRate(newRate)
// //redirect to ticket rate page
// res.redirect(`/ticket/${req.params.ticketId}`)
// })



module.exports = router