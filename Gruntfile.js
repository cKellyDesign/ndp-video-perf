var packageJson = require('./package.json');

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        express: {
            main: {
                options: {
                    port: 9010,
                    script: './index.js',
                    spawn: false,
                    opts: []
                }
            }
        },

        watch: {
            express: {
                files: ['./index.js', './router.js', './handlers/**.js'],
                tasks: ['express:main'],
                options: {
                    livereload: false,
                    spawn: false
                }
            }
        },

        env: {
            dev: {
                dbRoot: "mongodb://localhost/ndp-video-perf"
            },
            prod: {
                dbRoot: "/"
            }
        }
    });

    grunt.registerTask('default', ['env:dev', 'express', 'watch']);
};