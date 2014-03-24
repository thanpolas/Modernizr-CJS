/*!
{
  "name": "File API",
  "property": "filereader",
  "caniuse": "fileapi",
  "notes": [{
    "name": "W3C Working Draft",
    "href": "http://www.w3.org/TR/FileAPI/"
  }],
  "tags": ["file"],
  "knownBugs": ["Will fail in Safari 5 due to its lack of support for the standards defined FileReader object"]
}
!*/
/* DOC
`filereader` tests for the File API specification

Tests for objects specific to the File API W3C specification without
being redundant (don't bother testing for Blob since it is assumed
to be the File object's prototype.)
*/
var test = module.exports = function(cb) {
  cb(!!(window.File && window.FileList && window.FileReader));
};

test.name = 'fileapi';
