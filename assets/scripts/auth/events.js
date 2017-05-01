'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const helpers = require('../helpers')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  // console.log('sign-out ran')
  // const data = getFormFields(this)
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  // console.log('changePassword ran')
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// if user clicks 'Sign Up!' at bottom of Sign In form, shows Sign-up form
const redirectToSignUp = function (event) {
  helpers.showView(['sign-up-view'])
}

const redirectToSignIn = function (event) {
  helpers.showView(['sign-in-view'])
}

const redirectToChangePassword = function (event) {
  $('#insert-search-results-here').html('')
  helpers.showView(['content-grid-view', 'search-results', 'change-password-view', 'drawer-view', 'header-view'])
  // toggles the material design drawer upon selecting change pw
  document.getElementById('my-layout').MaterialLayout.toggleDrawer()
}

const exitChangePassword = function (event) {
  helpers.showView(['content-grid-view', 'search-results', 'drawer-view', 'header-view'])

  // clears form fields upon exiting
  $('#change-password').find('input:text, input:password, select, textarea').val('')
}

const myMusicView = function (event) {
  helpers.showView(['drawer-view', 'header-view', 'content-grid-view', 'search-results'])
}

const myContestView = function (event) {
  helpers.showView(['drawer-view', 'header-view', 'content-grid-view', 'contest-view'])
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('click', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-up-redirect').on('click', redirectToSignUp)
  $('#sign-in-redirect').on('click', redirectToSignIn)
  $('#change-password-redirect').on('click', redirectToChangePassword)
  $('#exit-change-password').on('click', exitChangePassword)

  $('#my-music').on('click', myMusicView)
  $('#contests').on('click', myContestView)
}

module.exports = {
  addHandlers
}
