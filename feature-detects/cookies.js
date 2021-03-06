/*!
{
  "name": "Cookies",
  "property": "cookies",
  "tags": ["storage"],
  "authors": ["tauren"]
}
!*/
/* DOC
Detects whether cookie support is enabled.
*/
// https://github.com/Modernizr/Modernizr/issues/191
var test = module.exports = function(cb) {
  // navigator.cookieEnabled is in IE9 but always true. Don't rely on it.

  // try..catch because some in situations `document.cookie` is exposed but throws a
  // SecurityError if you try to access it; e.g. documents created from data URIs
  // or in sandboxed iframes (depending on flags/context)
  try {
    // Create cookie
    document.cookie = 'cookietest=1';
    var ret = document.cookie.indexOf('cookietest=') != -1;
    // Delete cookie
    document.cookie = 'cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT';
    cb(ret);
  }
  catch (e) {
    cb(false);
  }
};

test.testname = 'cookies';
