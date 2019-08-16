class SongFunc {

    async searchSongVideo(songName) {
        console.log('hey')
        let data = await $.get(`/youtube/${songName}`)
        console.log(data)
        return data
    }
    async getAlbumTrack(artistName, albumName) {
    
        let data = await $.get(`/albums/?artistName=${artistName}&albumName=${albumName}`)
        console.log(data.track)
        let arr = data.track.map(u => { return { name: u.name } })
        console.log(arr)
        return arr

    }
    addFavorite(objectSong) {
        $.post('/songsName', objectSong, function (req, res) {
            console.log(res)
        })
    }
    // ---------------------------------------------------------------------------------------------------------------------------------------

    async getDataSong(name) {
        const data = await $.get(`/songName/${name}`)
        console.log(data)
        return data
    }

    async getSimilarArtist(artistName) {
        console.log(artistName)
        let data = await $.get(`/similarArtist/${artistName}`)
        console.log('im here')
        console.log(data)
        return data
    }
    async searchSongLyrics(songName, artistName) {
        let data = await $.get(`/lyrics/?artistName=${artistName}&songName=${songName}`)

        let n = data.search("<Lyric>");
        let m = data.search("</Lyric>");
        let s = n + 7
        let Lyrics = data.slice(s, m);
        return Lyrics
    }


    async getFavFromDB() {
        let data = await $.get('/favorites', function (req, res) {
            console.log("u r in songsclass")

        })
        console.log("this is the data = " + data)
        return data
    }
}
