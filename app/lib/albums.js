
const request = require( 'request' )
const apiKey= '633d3ac6df72c0c2cbe11af50e3f2d9d'


function albums( artistName, albumName, callback) {
    let an = artistName
    let ab = albumName
    
    console.log(artistName)
    console.log(albumName)
    request.get( `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${apiKey}&artist=${artistName}&album=${albumName}&format=json`, function ( error, response, body ) {
    const albumObject = JSON.parse(body)
        console.log(body)
        callback(albumObject.album.tracks)
    } )
}

module.exports = albums
