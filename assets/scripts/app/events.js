'use strict'

const helpers = require('../helpers')

const addSong = function (event) {
  console.log('clicked add song')
  helpers.showView(['content-grid-view', 'add-song-view', 'drawer-view', 'header-view'])
}

const addHandlers = () => {
  $('#add-song-form').on('click', addSong)
}

module.exports = {
  addHandlers
}
