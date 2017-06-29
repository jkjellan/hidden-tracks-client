'use strict'

const store = require('../store')
const helpers = require('../helpers')
const selectors = require('./selectors')
const appEvents = require('../app/events')

const signUpSuccess = (ajaxResponse) => {
  $('.sign-up-spinner').button('reset')
  // console.log('sign up Success')
  helpers.showView(['sign-in-view'])
  helpers.showAlert($('#sign-in-success-message'))

  // clears sign-up form fields upon sign-in
  $('#sign-up').find('input:text, input:password, select, textarea').val('')
}

const signUpFailure = (error) => {
  $('.sign-up-spinner').button('reset')
  // console.error(error)
  // console.log('sign up failure')
  helpers.showAlert($('#sign-up-failure-message'))

  // clears sign-up form fields upon sign-in
  $('#sign-up').find('input:text, input:password, select, textarea').val('')
}

const signInSuccess = (ajaxResponse) => {
  $('.sign-in-spinner').button('reset')
  // console.log('sign in success', ajaxResponse.user)
  store.user = ajaxResponse.user
  helpers.showView(['drawer-view', 'header-view', 'content-grid-view', 'search-results'])
  selectors.sideDrawer.userSignedIn.html(store.user.email)
  appEvents.onGetSongs()

  // clears sign-in form fields upon sign-in
  $('#sign-in').find('input:text, input:password, select, textarea').val('')
}

const signInFailure = (error) => {
  $('.sign-in-spinner').button('reset')
  // console.error(error)
  helpers.showAlert($('#sign-in-failure-message'))

  // clears sign-in form fields upon sign-in
  $('#sign-in').find('input:text, input:password, select, textarea').val('')
}

const signOutSuccess = () => {
  // console.log('sign out success')
  store.user = null
  helpers.showView(['sign-in-view'])
  $('#insert-song-player-results-here').html('')
  $('#insert-search-results-here').html('')
  // toggles the material design drawer upon signing out
  document.getElementById('my-layout').MaterialLayout.toggleDrawer()
}

const signOutFailure = (error) => {
  // console.error(error)
}

const changePasswordSuccess = () => {
  // console.log('change password success, nothing was returned')
  // is it necessary to clear out user store?
  // store.user = null
  helpers.showView(['drawer-view', 'header-view', 'content-grid-view', 'search-results'])

  // clears change-password form fields upon sign-in
  $('#change-password').find('input:password, select, textarea').val('')
}

const changePasswordFailure = (error) => {
  // console.error(error)
  helpers.showAlert($('#change-password-failure-message'))

  // clears change-password form fields upon sign-in
  $('#change-password').find('input:password, select, textarea').val('')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
