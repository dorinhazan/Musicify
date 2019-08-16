const SpotifyWebApi = require('spotify-web-api-node')
require('dotenv').config()

const spotifyApi = new SpotifyWebApi({
    clientId: 'c3fead2022dd4942960a580129a82b4b',
    clientSecret: '8e0c3c79941e47c383856efb85091bf6',
    redirectUri: `https://localhost:3030/callback`
})

spotifyApi.setAccessToken(process.env.SPOTIFY_ACCESS_TOKEN)

module.exports = spotifyApi