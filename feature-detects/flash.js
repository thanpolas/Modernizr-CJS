/*!
  {
  "name": "Flash",
  "property": "flash",
  "tags": ["flash"],
  "polyfills": ["shumway"]
  }
  !*/
/* DOC
Detects support flash, as well as flash blocking plugins
*/
var createElement = require('../src/createElement');
var docElement = require('../src/docElement');
var getBody = require('../src/getBody');


/*!
  {
  "name": "Flash",
  "property": "flash",
  "tags": ["flash"],
  "polyfills": ["shumway"]
  }
  !*/
/* DOC
Detects support flash, as well as flash blocking plugins
*/
var test = module.exports = function(cb) {
  /* jshint -W053 */
  var runTest = function(result, embed) {
    var bool = !!result;
    if (bool) {
      bool = new Boolean(bool);
      bool.blocked = (result === 'blocked');
    }
    if (embed && body.contains(embed)) {
      body.removeChild(embed);
    }
  };
  var easy_detect;
  var activex;
  // we wrap activex in a try/catch because when flash is disabled through
  // ActiveX controls, it throws an error.
  try {
    // Pan is an API that exists for flash objects.
    activex = 'ActiveXObject' in window && 'Pan' in new window.ActiveXObject('ShockwaveFlash.ShockwaveFlash');
  } catch(e) {}

  easy_detect = !( ( 'plugins' in navigator && 'Shockwave Flash' in navigator.plugins ) || activex );

  if (easy_detect) {
    runTest(false);
  }
  else {
    // flash seems to be installed, but it might be blocked. We have to
    // actually create an element to see what happens to it.
    var embed = createElement('embed');
    var body = getBody();
    var blockedDetect;
    var inline_style;

    embed.type = 'application/x-shockwave-flash';

    // Need to do this in the body (fake or otherwise) otherwise IE8 complains
    body.appendChild(embed);
    docElement.appendChild(body);

    // Pan doesn't exist in the embed if its IE (its on the ActiveXObjeect)
    // so this check is for all other browsers.
    if (!('Pan' in embed) && !activex) {
      runTest('blocked', embed);
      return;
    }

    blockedDetect = function() {
      // if we used a fake body originally, we need to restart this test, since
      // we haven't been attached to the DOM, and therefore none of the blockers
      // have had time to work.
      if (!docElement.contains(body)) {
        body = document.body || body;
        embed = document.createElement('embed');
        embed.type = 'application/x-shockwave-flash';
        body.appendChild(embed);
        return setTimeout(blockedDetect, 1000);
      }
      if (!docElement.contains(embed)) {
        runTest('blocked');
      }
      else {
        inline_style = embed.style.cssText;
        if (inline_style !== '') {
          // the style of the element has changed automatically. This is a
          // really poor heuristic, but for lower end flash blocks, it the
          // only change they can make.
          runTest('blocked', embed);
        }
        else {
          runTest(true, embed);
        }
      }

      // If we're rockin' an attached fake body, clean it up
      if (body.fake && body.parentNode) {
        body.parentNode.removeChild(body);
      }
    };

    // If we have got this far, there is still a chance a userland plugin
    // is blocking us (either changing the styles, or automatically removing
    // the element). Both of these require us to take a step back for a moment
    // to allow for them to get time of the thread, hence a setTimeout.
    //
    setTimeout(blockedDetect, 10);
  }
};

test.testname = 'flash';
