var ModernizrProto = require('./ModernizrProto');

// Fake some of Object.create
// so we can force non test results
// to be non "own" properties.
var Modernizr = function(){};

Modernizr.prototype = ModernizrProto;

// Leak modernizr globally when you `require` it
// rather than force it here.
// Overwrite name so constructor name is nicer :D
module.exports = new Modernizr();
