var mongoose = require('mongoose')
const Schema = mongoose.Schema

const songSchema = new Schema({
    artist: String,
    song: String,
    album:String,
    lyrics: String,
    yotube:String ,
    Icon: String
})

const Song = mongoose.model('song', songSchema)



module.exports = Song