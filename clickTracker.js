var log = require('logger/ajaxlogger');

var $ = window.$;

handleClicks();

function handleClicks() {
  $('body').click(function (ee) {
    var target = $(ee.target);
    if (target.closest('.clickable').length) {
      var clicked = target.closest('.clickable');
      log({
        'event': 'click',
        classes: clicked.attr('class')
      });
    }

    if (target.closest('a').length) {
      var clicked = target.closest('a');
      log({
        'event': 'click',
        href: clicked.attr('href')
      });
    }
  });
}