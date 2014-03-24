# Modernizr port to CJS

Modernizr will not allow individual tests to be required from source. There is a standing issue about this:

https://github.com/Modernizr/Modernizr/issues/1276

This repository will make an effort to turn all test modules into CJS format with the specific intent to be required by libraries and not applications.

If you want to just add Modernizr to your website then please go to http://modernizr.com

## Install

use NPM

```shell
npm install Modernizr-CJS --save-dev
```

## How to use

Require individual tests with:

```
var cookies = require('Modernizr-CJS/feature-detects/cookies');
```

All tests are functions with a callback that provide a boolean value:

```js
cookies(function(result) {
  typeof result === 'boolean'; // true
});
```

## Ported Tests

The following tests have been ported to be CJS modules:

* `feature-detects/es5/array`
* `feature-detects/es5/date`
* `feature-detects/es5/function`
* `feature-detects/es5/object`
* `feature-detects/es5/strictmode`
* `feature-detects/es5/string`
* `feature-detects/file/api` (Filereader test).
* `feature-detects/file/filesystem`
* `feature-detects/cookies`
* `feature-detects/cors`
* `feature-detects/eventlistener`
* `feature-detects/history`
* `feature-detects/video`
* `feature-detects/websockets`

Pull Requests welcome...

