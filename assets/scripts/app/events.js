'use strict'
const getFormFields = require(`../../../lib/get-form-fields`)

const helpers = require('../helpers')
const api = require('./api')
const ui = require('./ui')

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
  helpers.showView(['content-grid-view', 'add-song-view', 'drawer-view', 'header-view'])
}

const exitAddSong = function (event) {
  helpers.showView(['content-grid-view', 'drawer-view', 'header-view'])
}

const addHandlers = () => {
  $('#add-song-form').on('click', addSong)
  $('#exit-add-song').on('click', exitAddSong)

  $('#add-song').on('submit', onNewSong)
}

const onGetSongs = () => {
  // needed locally because onGetSongs is called from newSongSuccess in app ui
  const api = require('./api')
  console.log('in onGetSongs')
  api.getSongs()
    .then(ui.getSongsSuccess)
    .catch(ui.getSongsFailure)
}

const onDeleteSong = (id) => {
  event.preventDefault()

  api.deleteSong(id)
    .then(ui.deleteSongSuccess)
    .catch(ui.deleteSongFailure)
}

module.exports = {
  addHandlers,
  onGetSongs,
  onDeleteSong
}
