var env = require('gulp-environments');

var dev  = env.development,
    prod = env.production;

var buildDest = prod() ? 'build/release' : 'build/debug';

var config = {
    buildDest: prod() ? 'build/release' : 'build/debug',
    paths: {
        styles: {
            src: 'src/**/*.{scss,sass}',
            dest: buildDest + '/'
        },
        html: {
            src: 'src/**/*.{html,htm}',
            dest: buildDest + '/'
        },
        ts: {
            src: 'src/**/*.ts',
            dest: buildDest + '/'
        }
    }
};

module.exports = config;