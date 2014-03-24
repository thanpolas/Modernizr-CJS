/*!
{
  "name": "WebGL",
  "property": "webgl",
  "caniuse": "webgl",
  "tags": ["webgl", "graphics"],
  "polyfills": ["jebgl", "webglcompat", "cwebgl", "iewebgl"]
}
!*/
var createElement = require('./createElement');

var test = module.exports = function(cb) {
  var canvas = createElement('canvas');
  if ('supportsContext' in canvas) {
    cb(canvas.supportsContext('webgl') || canvas.supportsContext('experimental-webgl'));
    return;
  }
  cb(!!window.WebGLRenderingContext);
};

test.name = 'webgl';
