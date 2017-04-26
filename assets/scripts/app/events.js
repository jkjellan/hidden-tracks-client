'use strict'
const getFormFields = require(`../../../lib/get-form-fields`)

const helpers = require('../helpers')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onNewSong = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  // const data = {
  //   'song': {
  //     'song_title': 'Ajax',
  //     'artist_name': 'byAjax',
  //     'song_url': 'Testing with Ajax'
  //   }
  // }
  // console.log('event onNewGame triggered')
  api.newSong(data)
    .then(ui.newSongSuccess)
    .catch(ui.newSongFailure)
}

const addSong = function (event) {
  console.log('clicked add song')
  $('main').scrollTop(0)
  helpers.showView(['content-grid-view', 'add-song-view', 'drawer-view', 'header-view'])
}

const exitAddSong = function (event) {
  helpers.showView(['content-grid-view', 'drawer-view', 'header-view'])
}

const onGetSongs = () => {
  // needed locally because onGetSongs is called from newSongSuccess in app ui
  const api = require('./api')
  console.log('in onGetSongs')
  api.getSongs()
    .then(ui.getSongsSuccess)
    .catch(ui.getSongsFailure)
}

// onDeleteSong is being called from
const onDeleteSong = () => {
  event.preventDefault()

  api.deleteSong(store.id)
    .then(ui.deleteSongSuccess)
    .catch(ui.deleteSongFailure)
}

const onEditSong = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  api.editSong(data)
    .then(ui.editSongSuccess)
    .catch(ui.editSongFailure)
}

const addHandlers = () => {
  $('#add-song-form').on('click', addSong)
  $('#exit-add-song').on('click', exitAddSong)
  $('#exit-edit-song').on('click', exitAddSong)
  $('#edit-song').on('submit', onEditSong)
  $('#add-song').on('submit', onNewSong)
}

module.exports = {
  addHandlers,
  onGetSongs,
  onDeleteSong
}
