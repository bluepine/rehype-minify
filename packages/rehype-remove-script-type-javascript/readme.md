<!--This file is generated by `build-packages.js`-->

# rehype-remove-script-type-javascript

Remove `type` and `language` on JavaScript scripts.

## Install

```sh
npm install rehype-remove-script-type-javascript
```

## Example

##### In

```html
<script type="text/javascript"></script>
<script language="javascript1.5"></script>
```

##### Out

```html
<script></script>
<script></script>
```

## License

[MIT](https://github.com/wooorm/rehype-minify/blob/master/LICENSE) © [Titus Wormer](http://wooorm.com)