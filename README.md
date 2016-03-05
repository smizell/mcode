# mcode

Take your MSON and run it as code using [Geneva](https://github.com/smizell/geneva).

## Usage

**Requirement**: to use this functionality, your code MUST be found under the heading `Main` and MUST be an array following Geneva's structure and syntax.

### run

Takes an MSON structure, converts it to JSON, and runs it through Geneva.

Given the following MSON:

```apib
# Main (array)
- !+
- 5 (number)
- 3 (number)
```

When you execute it as code, it returns the correct result.

```js
var mcode = require('mcode');
mcode.run(msonAbove, function(error, result) {
  console.log(result); // Outputs 8
});
```

### msonToJson

Takes an MSON structure and converts it into JSON.

Given the following MSON:

```apib
# Main (array)
- !+
- 5 (number)
- 3 (number)
```

When you execute it as code, it returns the correct result.

```js
var mcode = require('mcode');
mcode.msonToJson(msonAbove, function(error, result) {
  console.log(result); // Outputs ['!+', 5, 3]
});
```

## Command Line Tool

Install `mcode` globally.

```sh
npm install mcode -g
```

Use the `run` command to run code.

```sh
mcode run filename.md
```
