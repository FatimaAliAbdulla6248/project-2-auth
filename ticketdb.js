const db = require('./models')


db.ticket.bulkCreate([
    {
    "destination": "Paris",
    "gatenumber": "A1",
    "seatnumber": "F10"
},
    {
    "destination": "London",
    "gatenumber": "B1",
    "seatnumber": "F11"
},
    {
    "destination": "Italy",
    "gatenumber": "C1",
    "seatnumber": "F12"
}
     
]
).then(() => console.log('test'))



