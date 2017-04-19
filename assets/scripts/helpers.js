'use strict'

// function to hide all views except the one you want to show
const showView = function (viewName) {
  function showView (viewName) {
    $('.view').hide()
    $('#' + viewName).show()
  }

  $('[data-launch-view]').on('click', function (e) {
    e.preventDefault()
    const viewName = $(this.attr('data-launch-view'))
    showView(viewName)
  })
}

module.exports = {
  showView
}
