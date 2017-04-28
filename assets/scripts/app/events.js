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

function youtubeApiCall (query) {
  const search = require('./search')

  const base = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCbVcF-CQLSKJIrAtwywxY9Uw8lcrggE30&part=snippet&maxResults=6&q='
  const q = query
  const url = base + q
  console.log('first line of youtubeApicall')
  $.ajax({
    cache: false,
    dataType: 'json',
    type: 'GET',
    timeout: 5000,
    url: url
  })
  .done(function (data) {
    console.log(data)
    console.log('in .done of AJAX')
    store.search = data
    search.displaySearch()
  })
}

const onSearch = function (e) {
  if (!e) { e = window.event }
  if (e.keyCode === 13) {
    e.preventDefault()
    const query = $(e.target).val()
    $(e.target).val('')
    console.log(query)
    youtubeApiCall(query)
    // let request = gapi.client.youtube.search.list({
    //   q: encodeURIComponent(search).replace(/%20/g, '+'),
    //   part: 'snippet',
    //   type: 'video',
    //   order: 'relevance',
    //   maxResults: 6
    // })
    //
    // request.execute(function (response) {
    //   // need a better spot for this function declaration
    //   const search = require('./search')
    //   // let str = JSON.stringify(response.result)
    //   // $('#search-results').html('<pre>' + str + '</pre>')
    //   const result = response.result
    //   store.search = result
    //   console.log('about to display search results')
    //   search.displaySearch()
    // })
  }
}

const addHandlers = () => {
  $('#add-song-form').on('click', addSong)
  $('#exit-add-song').on('click', exitAddSong)
  $('#exit-edit-song').on('click', exitAddSong)
  $('#edit-song').on('submit', onEditSong)
  $('#add-song').on('submit', onNewSong)

  $('#search').on('keydown', onSearch)
}

module.exports = {
  addHandlers,
  onGetSongs,
  onDeleteSong
}
