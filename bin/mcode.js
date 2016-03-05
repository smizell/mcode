#!/usr/bin/env node

var fs = require('fs');
var program = require('commander');

var mcode = require('../lib/mcode');

program
  .command('run')
  .description('Run MSON as code')
  .action(runCode);

program.parse(process.argv);

// Actions ---------------------------------

function runCode(filename) {
  var mson = fs.readFileSync(filename).toString().trim();
  mcode.run(mson, function(error, result) {
    console.log(result);
  });
}
