'use static'

const html = {
  songHtml:
    "<div class='my-song-card mdl-cell--middle mdl-card mdl-cell mdl-cell--12-col mdl-shadow--2dp'>" +
      "<div class='mdl-card__title'>Deerhoof - Spiral Golden Town</div>" +
      "<div class=' mdl-cell--middle mdl-card__media'>" +
        "<iframe width='auto' height='auto' src='https://www.youtube.com/embed/oEdH5nsPlwE' frameborder='0'></iframe>" +
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
}

console.log(html)

module.exports = {
  html
}
