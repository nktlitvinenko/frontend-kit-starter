var env = require('gulp-environments');

var dev  = env.development,
    prod = env.production;

var config = {
    buildDest: prod() ? 'build/release' : 'build/debug'
};

module.exports = config;