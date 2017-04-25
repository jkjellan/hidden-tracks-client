'use strict'

const store = require('../store')
const helpers = require('../helpers')
const selectors = require('./selectors')
const appEvents = require('../app/events')

const signUpSuccess = (ajaxResponse) => {
  console.log('sign up Success')
  helpers.showView(['sign-in-view'])
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (ajaxResponse) => {
  console.log('sign in success', ajaxResponse.user)
  store.user = ajaxResponse.user
  helpers.showView(['drawer-view', 'header-view', 'content-grid-view'])
  selectors.sideDrawer.userSignedIn.html(store.user.email)
  appEvents.onGetSongs()
}

const signInFailure = (error) => {
  console.error(error)
}

const signOutSuccess = () => {
  console.log('sign out success')
  store.user = null
  helpers.showView(['sign-in-view'])
}

const signOutFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = () => {
  console.log('change password success, nothing was returned')
  // is it necessary to clear out user store?
  // store.user = null
  helpers.showView(['drawer-view', 'header-view'])
}

const changePasswordFailure = (error) => {
  console.error(error)
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
