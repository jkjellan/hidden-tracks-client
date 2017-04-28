'use strict'
const store = require('../store')
const helpers = require('../helpers')
const appEvents = require('./events')
const render = require('./render')

const newSongSuccess = (ajaxResponse) => {
  const appEvents = require('./events')
  console.log('New Song Success')
  console.log(ajaxResponse)
  store.song = ajaxResponse.song
  console.log(store.song)
  appEvents.onGetSongs()
}

const newSongFailure = (error) => {
  console.log('New Song error')
  console.error(error)
}

const deleteSongSuccess = (ajaxResponse) => {
  const appEvents = require('./events')
  console.log('Delete Song Success')
  console.log(ajaxResponse)
  appEvents.onGetSongs()
}

const deleteSongFailure = (error) => {
  console.log('Delete Song error')
  console.error(error)
}

const getSongsSuccess = (ajaxResponse) => {
  console.log('Get Songs Success')
  console.log(ajaxResponse)
  // Stores an array of song objects and
  // renders that song object to user playlist
  store.songs = ajaxResponse.songs
  render.renderPlaylist(store.songs)
}

const getSongsFailure = (error) => {
  console.log('Get Songs Error')
  console.error(error)
}

const editSongSuccess = (ajaxResponse) => {
  helpers.showView(['content-grid-view', 'drawer-view', 'header-view'])
  const appEvents = require('./events')
  console.log('Edit Song Success')
  console.log(ajaxResponse)
  store.song = ajaxResponse.song
  console.log(store.song)
  appEvents.onGetSongs()
}

const editSongFailure = (error) => {
  console.log('Edit Song error')
  console.error(error)
}

module.exports = {
  newSongSuccess,
  newSongFailure,
  getSongsSuccess,
  getSongsFailure,
  deleteSongSuccess,
  deleteSongFailure,
  editSongSuccess,
  editSongFailure
}
