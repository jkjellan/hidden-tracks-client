'use strict'
const store = require('../store')
const render = require('./render')

const displaySearch = function () {
  // console.log('displaying search results')
  // console.log(store.search)
  render.renderSearchResults()
}

module.exports = {
  displaySearch
}
