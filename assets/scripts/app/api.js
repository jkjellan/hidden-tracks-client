'use strict'
const config = require('../config')
const store = require('../store')

const newSong = (data) => {
  data.song.user_id = store.user.id
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/songs',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteSong = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/songs/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getSongs = () => {
  return $.ajax({
    url: config.apiOrigin + '/songs',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newSong,
  getSongs,
  deleteSong
}
