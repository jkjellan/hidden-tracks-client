'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts
require('./assets/scripts/index.js')

// styles
require('./assets/styles/index.scss')

// adds material design lite, which I store locally in assets
require('./assets/mdl/material-design-lite/material.min.js')

// adds google api to project, which I store locally
// require('./node_modules/googleapis/apis/youtube/v3.js')
// let google = require('googleapis')
// let urlshortener = google.youtube('v3')
// console.log('about to tell you what requiring googleapi returns')
// var google = require('googleapis')
// console.log("this is what require('googleapis') returns: ", google)
