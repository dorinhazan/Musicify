const request = require('request')

function lyrics(songName,artistName, callback) {
   request.get(`http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=${artistName}&song=${songName}`, function (err, response, body) {
       callback(body)
   })
}
module.exports = lyrics