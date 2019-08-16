const request = require('request')

function SimilarArtists(artistName, callback) {
   console.log(artistName)
   request.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${artistName}&api_key=633d3ac6df72c0c2cbe11af50e3f2d9d&format=json&limit=5`, function (error, response, body) {

   let artistData = JSON.parse(body)
       let artistArray = artistData.similarartists.artist
       // console.log("this is the data of all the similar artist: " + artistArray )
       let Similar = []
       for (let i = 0; i < 5; i++) {
           Similar.push(artistArray[i].name)
       }
       console.log(Similar)
       callback(Similar)
   })

}

module.exports = SimilarArtists