var env = require('gulp-environments');

var dev  = env.development,
    prod = env.production;

var buildDest = prod() ? 'build/release' : 'build/debug';

var config = {
    buildDest: prod() ? 'build/release' : 'build/debug',
    env: prod() ? 'production' : 'development',
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
    },
    html_minifier_config : {
        collapseWhitespace: true,
        caseSensitive: true
    }
};

module.exports = config;