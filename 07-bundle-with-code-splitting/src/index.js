require.ensure(['./button'], function (require) {
  var $button = require('./button');
  document.body.appendChild($button);
});
