var partial = require('./partial');

/**
 * Runs all tests and provides the results.
 * 
 * @param {Array.<Function>} tests The tests to run.
 * @param {Function(Object)} cb The callback with the result object.
 */
module.exports = function(tests, cb) {
  var testsFinished = 0;
  var totalTests = tests.length;
  var results = {};

  function resultCb(testNum, result) {
    results[tests[testNum].name] = result;
    testsFinished++;
    if (testsFinished === totalTests) {
      cb(results);
    }
  }

  for (var i = 0; i < totalTests; i++) {
    tests[i](partial(resultCb, i));
  }
};
