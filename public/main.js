
const r = new Renderer()
const SongsClass = new SongFunc()


$('body').on('click', '#btn', async function () {
    let input = $('#inp').val()
    console.log(input)
    let data = await SongsClass.getDataSong(input)
    r.renderSpotify(data)
})

$('body').on('click', '.bt-youtube', async function () {
    let songName = $(this).parent().parent().find('.name').text()
    let artistName =  $(this).parent().parent().find('.artist').text()    
    let st = songName+" "+ artistName
    console.log(st)
    let src = await SongsClass.searchSongVideo(st)
    r.renderYoutube(src)
})

$('body').on('click', '.bt-album', async function () {
    let artistName =  $(this).parent().parent().find('.artist').text()
    let albumName =  $(this).parent().parent().find('.album').text()
    let albumIcon =  $(this).parent().parent().find('.icon').attr('src')
    let tracks = await SongsClass.getAlbumTrack(artistName, albumName)
    console.log(tracks)
    let objAlbum = {"tracks": tracks, "icon": albumIcon,"albumName": albumName }
    r.renderAlbum(objAlbum)

    // render(tracks)
})

async function handleSearch() {
    let song = $('#inp').val()
    await SongsClass.getDataSong(song)
    //  Renderer.renderData(tempManager.cityData)
}


$('body').on('click', '.bt-similar', function () {
    let artistName = $(this).parent().parent().find('.artist').text()
    console.log(artistName)
    SongsClass.getSimilarArtist(artistName)
    // $(this).prop('diSongsClassbled',true)
})

$('body').on('click', '.bt-playlist', function () {
    let songName = $(this).parent().parent().find('.name').text()
    let artistName = $(this).parent().parent().find('.artist').text()
    let Icon = $(this).parent().parent().find('.icon').attr('src')
    let album = $(this).parent().parent().find('.album').text()
    let object = { song: songName, artist: artistName, Icon: Icon, album: album }
    console.log(object)
    SongsClass.addFavorite(object)
 })
$('body').on('click', '.bt-similar', async function () {
    let artistName = $(this).parent().parent().find('.artist').text()
    console.log(artistName)
    let data = await SongsClass.getSimilarArtist(artistName)
    r.renderSimilarArtist(data)
})
$('body').on('click', '.bt-lyrics', async function () {
    let songName = $(this).parent().parent().find('.name').text()
    console.log(songName)
    let artistName =  $(this).parent().parent().find('.artist').text()
    console.log(artistName)
    let Lyrics = await SongsClass.searchSongLyrics(songName, artistName)
    r.renderLyrics(Lyrics)
})
$('body').on('click', '.show', async function () {

    let data = await SongsClass.getFavFromDB()
    console.log("these are your favorites: " +data)
    r.renderMyFavorites(data)
 })
 $('body').on('click', '.bt-equalizer', function () {
     console.log('heyyyyyyyyyyyyyyyy')
   r.renderEqualizer()
 })
 const myFunc = async function(){
    let data = await SongsClass.getFavFromDB()
    console.log("these are your favorites: " +data)
    r.renderMyFavorites(data)
 }
//  $('body').on('click','.delete', async function(){
//     let song = $(this).parent().parent().text()
//     let song = $(this).parent().parent().remove()
//     await songClass.removeSong(song)
//     r.renderMyFavorites(songClass)
//     $(this).parent().remove()
//  })