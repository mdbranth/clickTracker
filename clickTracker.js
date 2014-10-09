var log = require('logger/ajaxlogger');

var $ = window.$;
var loaded = Date.now();
handleClicks();
handleUnload();

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

function handleUnload() {
  $(window).on('beforeunload', function() {
    log({
      'event': 'beforeunload',
      'timeSpent': Date.now() - loaded
    }).flush();
  });
}

