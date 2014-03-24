/*!
{
  "name": "ES5 String",
  "property": "es5string",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }],
  "polyfills": ["es5shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["es5"]
}
!*/
/* DOC
Check if browser implements ECMAScript 5 String per specification.
*/
var test = module.exports = function(cb) {
  cb(!!(String.prototype && String.prototype.trim));
};

test.name = 'es5string';
