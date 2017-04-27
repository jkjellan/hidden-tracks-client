'use strict'

function start() {
  // 2. Initialize the JavaScript client library.
  gapi.client.init({
    'apiKey': 'YOUR_API_KEY',
    // clientId and scope are optional if auth is not required.
    'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
    'scope': 'profile',
  }).then(function() {
    // 3. Initialize and make the API request.
    return gapi.client.request({
      'path': 'https://people.googleapis.com/v1/people/me',
    })
  }).then(function(response) {
    console.log(response.result)
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  });
};
// 1. Load the JavaScript client library.
gapi.load('client', start)

// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false)
}

// Search for a specified string.
function search() {
  let q = $('#search').val()
  let request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  })

  request.execute(function(response) {
    var str = JSON.stringify(response.result)
    $('#search-results').html('<pre>' + str + '</pre>')
  })
}

module.export = {
  handleAPILoaded,
  search
}
