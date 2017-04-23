'use strict'

const injectHtml = require('./html-to-inject')

// renderPlaylist takes an array of song objects
const renderPlaylist = function (songs) {
  $('#insert-songs-here').html('')
  console.log('rendering playlist, yo')
  console.log(songs)
  for (let i = 0; i < songs.length; i++) {
    console.log(songs[i])
    const title = songs[i].song_title
    const artist = songs[i].artist_name
    const url = songs[i].song_url

    $('#insert-songs-here').append(injectHtml.html.songHtml)
  }
}

module.exports = {
  renderPlaylist
}
