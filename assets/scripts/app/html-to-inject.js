'use static'

const songHtml = (title, artist, url, id, delimiter) => {
  const songHtml =
  `<div class='my-song-card mdl-cell--middle mdl-card mdl-cell mdl-cell--12-col mdl-shadow--2dp'>` +
    "<div class='my-avatar-dropdown'>" +
      `<div class='mdl-card__title'><span class='player-title'>${artist} ${delimiter} ${title}</span>` +
        "<div class='mdl-layout-spacer'></div>" +
        "<button id='play-song' class='my-player-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon'>" +
        "<i class='material-icons' role='presentation'>airplay</i>" +
        "<span class='visuallyhidden'>Accounts</span>" +
        "</button>" +
      "</div>" +
    "</div>" +

    "<div class=' mdl-cell--middle mdl-card__media'>" +
      `<iframe class='player-url' width='auto' height='auto' src='${url}' frameborder='0'></iframe>` +
    "</div>" +
    "<div class='mdl-card__actions'>" +
      `<button id='button${id}' class='mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon'>` +
        "<i class='material-icons' role='presentation'>arrow_drop_down</i>" +
        "<span class='visuallyhidden'>Accounts</span>" +
      "</button>" +
      `<ul class='mdl-menu mdl-menu--top-left mdl-js-menu mdl-js-ripple-effect' for='button${id}'>` +
        `<li data-id='${id}' class='edit-song mdl-menu__item'>Edit Song</li>` +
        `<li data-id='${id}' class='delete-song mdl-menu__item'>Delete Song</li>` +
      "</ul>" +
    "</div>" +
  "</div>"

  return songHtml
}

const searchHtml = (title, url) => {
  const searchHtml =
  `<div class='my-search-card mdl-cell--middle mdl-card mdl-cell mdl-cell--6-col-desktop mdl-shadow--2dp'>` +
    "<div class='my-avatar-dropdown'>" +
      `<div class='my-search-title mdl-card__title'>${title}` +
        "<div class='mdl-layout-spacer'></div>" +

      "</div>" +
    "</div>" +

    "<div class=' mdl-cell--middle mdl-card__media'>" +
      `<iframe class='url-class' width='auto' height='auto' src='${url}' frameborder='0'></iframe>` +
    "</div>" +
    "<div class='mdl-card__actions'>" +
      `<button id='button1' class='add-search-song mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon'>` +
        "<i class='material-icons' role='presentation'>add</i>" +
      "</button>" +
    "</div>" +
  "</div>"

  return searchHtml
}

const playerHtml = (title, url) => {
  const playerHtml =
    `<div class='player-results-header'>${title}</div>` +
    `<iframe width='100%' height='100%' src='${url}' frameborder='0'></iframe>`
  return playerHtml
}

module.exports = {
  songHtml,
  searchHtml,
  playerHtml
}
