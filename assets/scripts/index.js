'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const appEvents = require('./app/events.js')

// helpers are general efficiency improving functions to apply across the application
const helpers = require('./helpers')

$(() => {
  setAPIOrigin(location, config)
  // Upon page load, hides all views except views passed in array to showView
  // View options are 'header-view' 'drawer-view' 'sign-in-view' 'sign-up-view' 'change-password-view'
  console.log('Page loaded')
  helpers.showView(['sign-in-view'])
  authEvents.addHandlers()
  appEvents.addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
