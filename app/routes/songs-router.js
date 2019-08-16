const express = require('express')
const songApi = require('../../public/Songs-class')
const router = express.Router()
const youtube = require('../lib/youtube')
const albums = require('../lib/albums')
const songSchema = require('../model/schema')
const SimilarArtists = require('../lib/similarArtist')
const spotifyApi = require('../lib/spotify')
const lyrics = require('../lib/lyrics')
let allPlaylists=[]
let myFav=[]


router.get('/artist/:name', function () {

})
router.get('/lyrics', function (req, res) {
    const songName = req.query.songName
    console.log(songName)
    const artistName = req.query.artistName
    console.log(artistName)
    lyrics(songName, artistName, function (data) {
        res.json(data)
    })
 })
 
 
router.get('/youtube/:name', function (req, res) {
    const name = req.params.name
    youtube(name, function(data){
        console.log(`https://www.youtube.com/embed/${data}`)
        res.json(`https://www.youtube.com/embed/${data}`)
    })
})

// router.post('/songsName', (req, res) => {
//     let favorite = req.body
//     let playlist = new songSchema(favorite)
//     console.log(playlist)
//     playlist.save(() => res.json({ success: true }))
//  })
 router.get('/albums', function (req, res) {
     console.log('im here')
    let artistName = req.query.artistName
    let albumName = req.query.albumName
    console.log(artistName, albumName)
    if(albumName.charAt(0)=== " "){
        albumName =albumName.slice(1)
    }
    if(albumName.charAt(0)=== " "){
        albumName =albumName.slice(1)
    }
    albums(artistName, albumName ,function(data){
        console.log('bye')
        res.json(data)
        
    })
})
router.get('/similarArtist/:artist', function (req, res){
    const artist = req.params.artist
    console.log( artist )
    SimilarArtists(artist, function(artistArray){
        // console.log( artistArray )
        res.json( artistArray )
    })
 })


router.get('/songName/:name', async function (req, res) {
   console.log('hey')
   // let arr= []
   let name = req.params.name
   let data = await spotifyApi.searchTracks(name)
       .then(function (data) {
           let topThree = []
           for (let i = 0; i < 3; i++) {
               let info = {
                   artist: data.body.tracks.items[i].album.artists[0].name,
                   song: data.body.tracks.items[i].name,
                   album: data.body.tracks.items[i].album.name,
                   // lyrics: String,
                   // yotube:String ,
                   Icon: data.body.tracks.items[i].album.images[1].url
               }
               topThree.push(new songSchema(info))
               allPlaylists.push(new songSchema(info))
           }
           res.send(topThree)
       }, function (err) {
           console.error(err);
       });
       

})
router.get('/favorites', function(req, res){
    // let data = myFav.find({})
    console.log("u r in songs router")
    console.log("myFav = " + myFav)
    res.json(myFav)
 })
 router.post('/songsName', (req, res) => {
    let favorite = req.body
    let playlist = new songSchema(favorite)
    myFav.push(playlist)
    console.log(playlist)
    playlist.save(() => res.json({ success: true }))
 })
 router.delete('/song/:songName', function( req, res )  {
    let song = req.params.songName
    // console.log(city)
    //city = city[0].toUpperCase()  + city.slice(1)
    myFav.findOneAndRemove({song: song}) // deletes from the array we send back
    songSchema.findOneAndRemove({song: song}, function(response){ // deletes from the DB
        console.log('deleted')
    })
    res.end()
   })
module.exports = router