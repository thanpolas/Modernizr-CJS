# Modernizr port to CJS

Modernizr will not allow individual tests to be required from source. There is a standing issue about this:

https://github.com/Modernizr/Modernizr/issues/1276

This repository will make an effort to turn all test modules into CJS format with the specific intent to be required by libraries and not applications.

If you want to just add Modernizr to your website then please go to http://modernizr.com

## Install

use NPM

```shell
npm install modernizr-cjs --save-dev
```

## How to use

Require individual tests with:

```
var cookies = require('Modernizr-CJS/feature-detects/cookies');
```

All tests are functions with a callback that has as arguments the test outcome.

```js
cookies(function(result) {
  typeof result === 'boolean'; // true
});
```

### Running Multiple tests

A new module has been created to run multiple tests, require the `src/cjsTestRunner` module and invoke like so:

```js

var testRunner = require('modernizr-cjs/src/cjsTestRunner');

var tests = {
  es5array: require('modernizr-cjs/feature-detects/es5/array'),
  es5date: require('modernizr-cjs/feature-detects/es5/date'),
  es5function: require('modernizr-cjs/feature-detects/es5/function'),
  es5object: require('modernizr-cjs/feature-detects/es5/object'),
  es5strictmode: require('modernizr-cjs/feature-detects/es5/strictmode'),
  es5string: require('modernizr-cjs/feature-detects/es5/string')
};

testRunner([
  tests.es5array,
  tests.es5date,
  tests.es5function,
  tests.es5object,
  tests.es5strictmode,
  tests.es5string
], function(results) {
  console.log(results);
  typeof results.es5string === 'boolean'; // true
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
* `feature-detects/cookies`
* `feature-detects/cors`
* `feature-detects/eventlistener`
* `feature-detects/flash`
* `feature-detects/json`
* `feature-detects/history`
* `feature-detects/video`
* `feature-detects/webgl`
* `feature-detects/websockets`

Pull Requests welcome...

## Release History

- **v3.0.4**, *25 Mar 2014*
    - Introduced the `cjsTestRunner` module.
- **v3.0.2**, *24 Mar 2014*
    - Big Bang.
