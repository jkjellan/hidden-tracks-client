'use strict'

// function to hide all views except the one you want to show
const showView = function (viewName) {
  $('.view').hide()

  for (let i = 0; i < viewName.length; i++) {
    $('#' + viewName[i]).show()
  }
}

module.exports = {
  showView
}
