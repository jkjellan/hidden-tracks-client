'use strict'

const injectHtml = require('./html-to-inject')
const appEvents = require('./events')
const store = require('../store')
const helpers = require('../helpers')

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
  // renderPlaylist needs on deleteSong function from appEvents, and so I must require
  // appEvents in the local scope, as renderPlaylist is itself
  // exported and called from various parts of the application
  const appEvents = require('./events')

  $('#insert-songs-here').html('')
  console.log('rendering playlist, yo')
  console.log(songs)
  for (let i = 0; i < songs.length; i++) {
    console.log(songs[i])
    const title = songs[i].song_title
    const artist = songs[i].artist_name
    let url = songs[i].song_url
    const id = songs[i].id

    // if user has alread included an embedded URL link from Youtube,
    // leave url as is, otherwise, parse it to build an embedded URL
    if (url.indexOf('embed') === -1) {
      url = parseUrl(url)
    }
    // instert song html with song variables interpolated
    $('#insert-songs-here').append(injectHtml.songHtml(title, artist, url, id))
    // refresh the DOM so MDL js is active for recently injected html elements
    componentHandler.upgradeDom()
  }
  // attached click handlers to individual song actions
  $('.edit-song').on('click', (event) => {
    console.log('I can edit this song')
    const songId = $(event.target).attr('data-id')
    // storing song id, which will be used to in the AJAX DELETE request
    // invoked below in onDeleteSong()
    store.id = songId
    // scrolls to top of screen so user sees form
    $('main').scrollTop(0)
    helpers.showView(['content-grid-view', 'edit-song-view', 'drawer-view', 'header-view'])
  })
  $('.delete-song').on('click', (event) => {
    console.log('I can delete this song')

    // passes data-id (which is set to the song id) of the song
    // the user is trying to delete
    const songId = $(event.target).attr('data-id')
    // storing song id, which will be used to in the AJAX DELETE request
    // invoked below in onDeleteSong()
    store.id = songId
    console.log(store.id)
    appEvents.onDeleteSong()
  })
}

module.exports = {
  renderPlaylist
}
