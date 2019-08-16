class Renderer {
    renderYoutube(src) {
        $('#youtube').empty()
        const source = $('#templateYoutube').html()
        const template = Handlebars.compile(source)
        let obj = {"src": src}
        const newHTML = template(obj)
        $('#youtube').append(newHTML)
    }
    renderAlbum(objAlbum) {
        $('#similar-album').empty()
        const source = $('#templateAlbums').html()
        const template = Handlebars.compile(source)
        const newHTML = template(objAlbum)
        console.log(objAlbum)
        $('#similar-album').append(newHTML)
    }
    renderSimilarArtist(data){
        $('#similar-artist').empty()
        const source = $('#templateArtists').html()
        const template = Handlebars.compile(source)
        const newHTML= template({data})
        $('#similar-artist').append(newHTML)
    }
    renderSpotify(info) {
        console.log(info)
        $('#songInfo').empty()
        const source = $('#song-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({info:info})
        $('#songInfo').append(newHTML)
    }
    renderLyrics(lyrics) {
        $('.lyrics').empty()
        const source = $('#lyrics-template').html()
        const template = Handlebars.compile(source)
        let obj = {"lyrics": lyrics}
        const newHTML = template(obj)
        $('.lyrics').append(newHTML)
    }
    renderMyFavorites(data){
        $('.songInfo').empty()
        const source = $('#favorites-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({data})
        $('.fav').append(newHTML)
    }
    renderEqualizer(){
        $('#equalizer').empty()
        
        $('#equalizer').append( `<'div class= "e1 e"></div> <div class= "e2 e"></div> <div class= "e3 e"></div> <div class= "e4 e"></div>  <div class= "e5 e"></div><div class= "e6 e"></div>`)
       
    }
    // renderYoutubePlaylist(src) {
    //     $('#youtubePlaylist').empty()
    //     const source = $('#templateYoutube').html()
    //     const template = Handlebars.compile(source)
    //     let obj = {"src": src}
    //     const newHTML = template(obj)
    //     $('#youtubePlaylist').append(newHTML)
    // }
}

