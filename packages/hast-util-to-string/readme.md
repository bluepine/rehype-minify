<!--This file is generated by `build-packages.js`-->

# hast-util-to-string

Get the plain-text value of a HAST node.

## Install

```sh
npm install hast-util-to-string
```

## Usage

```javascript
var h = require('hastscript');
var toString = require('hast-util-to-string');

toString(h('p', 'Alpha'));
//=> 'Alpha'
toString(h('div', [h('b', 'Bold'), ' and ', h('i', 'italic'), '.']));
//=> 'Bold and italic.'
```

## API

### `toString(node)`

Transform a node to string.

## License

[MIT](https://github.com/rehypejs/rehype-minify/blob/master/LICENSE) © [Titus Wormer](http://wooorm.com)
