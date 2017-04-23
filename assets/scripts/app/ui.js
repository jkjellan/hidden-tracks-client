'use strict'
const store = require('../store')
const helpers = require('../helpers')
// const appEvents = require('./events')
const render = require('./render')

const newSongSuccess = (ajaxResponse) => {
  console.log('New Song Success')
  console.log(ajaxResponse)
  store.song = ajaxResponse.song
  console.log(store.song)
  // appEvents.onGetSongs()
}

const newSongFailure = (error) => {
  console.log('New Song error')
  console.error(error)
}

const getSongsSuccess = (ajaxResponse) => {
  console.log('Get Songs Success')
  console.log(ajaxResponse)
  // Stores an array of song objects
  store.songs = ajaxResponse.songs
  render.renderPlaylist(store.songs)
}

const getSongsFailure = (error) => {
  console.log('Get Songs Error')
  console.error(error)
}

module.exports = {
  newSongSuccess,
  newSongFailure,
  getSongsSuccess,
  getSongsFailure
}
