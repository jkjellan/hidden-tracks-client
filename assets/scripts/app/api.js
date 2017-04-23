'use strict'
const config = require('../config')
const store = require('../store')

const newSong = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/songs',
    method: 'POST',
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // },
    data
  })
}

const getSongs = () => {
  return $.ajax({
    url: config.apiOrigin + '/songs',
    method: 'GET'
  })
}

module.exports = {
  newSong,
  getSongs
}
