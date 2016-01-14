var packageJson = require('./package.json');

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        express: {
            main: {
                options: {
                    port: 9090,
                    script: './index.js',
                    spawn: false,
                    opts: []
                }
            }
        },

        watch: {
            express: {
                files: ['./index.js', './router.js'],
                tasks: ['express:main'],
                options: {
                    livereload: false,
                    spawn: false
                }
            }
        },

        env: {
            dev: {
                
            },
            prod: {

            }
        }
    });

    grunt.registerTask('default', ['express', 'watch']);
};