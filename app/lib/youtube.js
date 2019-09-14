const request = require( 'request' )
const apiKey= 'AIzaSyD9NPr9vfSKuijLfOppqnvuEagmto8rmow'


function youtube( name, callback) {
    console.log(name)
   request.get( `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${name}&key=${apiKey}`, function ( error, response, body ) {
    console.log(body)   
    const songObject = JSON.parse(body)
       console.log(songObject)
       console.log(songObject.items[0].id.videoId)
       callback(songObject.items[0].id.videoId)
   } )
}

module.exports = youtube