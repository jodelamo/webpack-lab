var $button = document.createElement('button');

$button.textContent = 'Add paragraph';
$button.addEventListener('click', onClick);

function onClick() {
  require.ensure(['./paragraph'], function (require) {
    var $p = require('./paragraph').cloneNode(true);
    document.body.appendChild($p)
  });
}

module.exports = $button;
