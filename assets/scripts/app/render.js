'use strict'

const injectHtml = require('./html-to-inject')

// The YouTube embedded url is formatted differently from the browser url
// so, I am parsing the browser url user will input when adding a new
// song, so that it can be rendered within the embedded video player.
const parseUrl = function (url) {
  const start = url.indexOf('=')
  const stop = url.indexOf('&', start)

  let parsed = null

  // If url doesn't have & in it, include all characters after =
  if (stop === -1) {
    parsed = url.slice(start + 1)
  } else {
    parsed = url.slice(start + 1, stop)
  }

  const youtube = 'https://www.youtube.com/embed/'

  return (youtube + parsed)
}

// renderPlaylist takes an array of song objects
const renderPlaylist = function (songs) {
  $('#insert-songs-here').html('')
  console.log('rendering playlist, yo')
  console.log(songs)
  for (let i = 0; i < songs.length; i++) {
    console.log(songs[i])
    const title = songs[i].song_title
    const artist = songs[i].artist_name
    let url = songs[i].song_url

    // if user has alread included an embedded URL link from Youtube,
    // leave url as is, otherwise, parse it to build an embedded URL
    if (url.indexOf('embed') === -1) {
      url = parseUrl(url)
    }

    $('#insert-songs-here').append(injectHtml.songHtml(title, artist, url))
  }
}

module.exports = {
  renderPlaylist
}
