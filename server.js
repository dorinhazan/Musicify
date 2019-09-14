
const express = require( 'express' )
const bodyParser = require('body-parser')
const app = express()
const path = require( 'path' )
const youtube = require( './app/lib/youtube' )

const SongsApi = require('./app/routes/songs-router')
// const xyz = require('./app/lib/SongsApi')
const spotify = require('./app/lib/spotify')
const lyrics = require('./app/lib/lyrics')
const PORT = 3031
const mongoose = require('mongoose')


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', SongsApi)
// app.use('/', xyz)
// app.use('/wishlist', wishlistApi)

mongoose.connect(process.env.MONGODB_URI||"mongodb://localhost/music-App", { useNewUrlParser: true }).then( () => {
    app.listen( process.env.PORT||PORT, function(err, res){
        console.group("The server runs on port " + PORT)
    })
})
