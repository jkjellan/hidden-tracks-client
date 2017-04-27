'use strict'
const store = require('../store')

const displaySearch = function () {
  console.log('displaying search results')
  $.each(store.search.items, function (index, item) {
    console.log(item)
  })
}

module.exports = {
  displaySearch
}
