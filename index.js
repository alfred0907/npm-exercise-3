const { parse, toString } = require('@estilles/expression-parser');
const { argv } = require('node:process');

if (argv.length - 2 !== 1) {
    throw new Error(`This program ${argv.length - 2 === 0 ? 'requires' : 'only accepts'} a SINGLE argument`);
} else {
    console.log(toString(parse(argv[2])));
}
