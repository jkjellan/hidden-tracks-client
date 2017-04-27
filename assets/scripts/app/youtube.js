'use strict'

// After the API loads, call a function to enable the search box.
function init () {
  console.log('in init')
  gapi.client.setApiKey("AIzaSyCbVcF-CQLSKJIrAtwywxY9Uw8lcrggE30");
  gapi.client.load("youtube", "v3", function () {
    console.log('inside init callback function')
    $('#search').on('submit', function () {
      console.log('focusing')
    })
  })
}
