const yargs = require('yargs');
const argv = yargs.argv;

console.log(encodeURIComponent(argv.address));