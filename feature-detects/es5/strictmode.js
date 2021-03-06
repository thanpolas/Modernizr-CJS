/*!
{
  "name": "ES5 Strict Mode",
  "property": "strictmode",
  "caniuse": "sctrict-mode",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }],
  "authors": ["@kangax"],
  "tags": ["es5"]
}
!*/
/* DOC
Check if browser implements ECMAScript 5 Object strict mode.
*/
var test = module.exports = function(cb) {
  cb(function(){'use strict'; return !this; }());
};

test.testname = 'es5strict';
