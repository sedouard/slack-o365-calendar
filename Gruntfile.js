module.exports = function (grunt) {
    // Load all grunt tasks matching the `grunt-*` pattern,
    // unless we're on Linux or Windows
    if (process.platform && process.platform === 'darwin') {
        require('load-grunt-tasks')(grunt);
    } else {
        require('load-grunt-tasks')(grunt, {scope: ['devDependencies', 'dependencies']});
    }

    var files = ['routes/**/*.js', 'public/javascripts/**/*.js', 'public/javascripts/**/*.js'];
    // Tagged builds get their own folders. live builds just go to live folder
    var cdnPath = process.env.RELEASE_VERSION ? process.env.RELEASE_VERSION : 'live';

    grunt.initConfig({
        jshint: {
            files: files,
            options: {
                jshintrc: './.jshintrc'
            }
        },
        jscs: {
            files: {
                src: files
            },
            options: {
                config: '.jscsrc',
                esnext: true
            }
        },
        jsbeautifier: {
            test: {
                files: {
                    src: files
                },
                options: {
                    mode: 'VERIFY_ONLY',
                    config: '.beautifyrc'
                }
            },
            write: {
                files: {
                    src: files
                },
                options: {
                    config: '.beautifyrc'
                }
            }
        }
    });

    grunt.registerTask('test', ['jshint', 'jscs', 'jsbeautifier:test']);
};
