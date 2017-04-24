'use static'

const songHtml = (title, artist, url) => {
  const songHtml =
  `<div class='my-song-card mdl-cell--middle mdl-card mdl-cell mdl-cell--12-col mdl-shadow--2dp'>` +
    `<div class='mdl-card__title'>${artist} - ${title}</div>` +
    "<div class=' mdl-cell--middle mdl-card__media'>" +
      `<iframe width='auto' height='auto' src='${url}' frameborder='0'></iframe>` +
    "</div>" +
    "<div class='mdl-card__actions'>" +
      "<button id='song-1' class='mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon'>" +
        "<i class='material-icons' role='presentation'>arrow_drop_down</i>" +
        "<span class='visuallyhidden'>Accounts</span>" +
      "</button>" +
      "<ul class='mdl-menu mdl-menu--top-left mdl-js-menu mdl-js-ripple-effect' for='song-1'>" +
        "<li id='' class='mdl-menu__item'>Edit Song</li>" +
        "<li id='' class='mdl-menu__item'>Delete Song</li>" +
      "</ul>" +
    "</div>" +
  "</div>"

  return songHtml
}


module.exports = {
  songHtml
}
