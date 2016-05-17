var $button = document.createElement('button');

$button.textContent = 'Add jibberish';
$button.addEventListener('click', onClick);

function onClick() {
  require.ensure(['./paragraph'], function (require) {
    var $p = require('./paragraph').cloneNode(true);
    var text = Math.random().toString(36).substring(7);

    $p.textContent = text;

    document.body.appendChild($p)
  });
}

module.exports = $button;
