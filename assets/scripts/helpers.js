'use strict'

// function to hide all views except the one you want to show
const showView = function (viewName) {
  $('.view').hide()

  for (let i = 0; i < viewName.length; i++) {
    $('#' + viewName[i]).show()
  }
}

const hideAlerts = () => {
  $('#change-password-success-message').hide()
  $('#sign-up-failure-message').hide()
  $('#sign-in-success-message').hide()
  $('#change-password-failure-message').hide()
}

const showAlert = function (message) {
  hideAlerts()

  message.slideDown().delay(3000).slideUp()
}

module.exports = {
  showView,
  showAlert
}
