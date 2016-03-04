var eidolon = require('eidolon');
var geneva = require('geneva');
var protagonist = require('protagonist');
var query = require('refract-query').query;

// Public interface
module.exports = {
  msonToJson: msonToJson,
  run: run
}

function run(msonFragment, callback) {
  msonToJson(msonFragment, function(error, jsonCode) {
    var genevaRunner = geneva();

    // Geneva takes JSON and runs it as code
    var result = genevaRunner.run(jsonCode);

    // Finally, we return the value of the executed code
    callback(null, result);
  });
}

function msonToJson(msonFragment, callback) {
  // Make this into a valid string for protagonist
  var fullMson = "# Data Structures\n\n" + msonFragment.trim();

  protagonist.parse(fullMson, function(error, result) {
    // Looks through the results to find the Main element
    var mainCode = query(result, {meta: {id: 'Main'}})[0];

    // Take the Main element and convert it to JSON
    var jsonResult = eidolon.example(mainCode, {});

    // Returns the JSON value of the given MSON fragment
    callback(null, jsonResult);
  });
}
