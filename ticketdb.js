const db = require('./models')


db.ticket.bulkCreate([
    {
    "destination": "Paris",
    "gatenumber": "A1",
    "seatnumber": "F10",
    "url": "https://www.planetware.com/photos-large/F/france-paris-eiffel-tower.jpg"
},
    {
    "destination": "London",
    "gatenumber": "B1",
    "seatnumber": "F11",
    "url": "https://e3.365dm.com/21/04/2048x1152/skynews-big-ben-london-parliament_5357329.jpg"
},
    {
    "destination": "Kuwait",
    "gatenumber": "C1",
    "seatnumber": "F12",
    "url": "https://media.istockphoto.com/photos/kuwait-tower-city-skyline-glowing-at-night-taken-in-kuwait-in-2018-picture-id1125194570?k=20&m=1125194570&s=612x612&w=0&h=f_8RRkV5z8TmIVCkxrfaKMNAzHAa97gOfzjFS1JabhU="
}
     
]
).then(() => console.log('test'))



