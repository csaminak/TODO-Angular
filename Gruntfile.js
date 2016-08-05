module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({

        clean: ['build'],

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                ignores: ['src/js/vendor/**']
            },
            all: {
                files: {
                    src: ['src/js/**/*.js', 'test/specs/**/*.js', 'Gruntfile.js']
                }
            }
        },

        sass: {
            all: {
                files: {
                    'build/css/styles.css': 'src/sass/main.scss'
                }
            }
        },

        copy: {
            html: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['index.html'], dest: 'build/'
                }]
            }
        },

        concat: {
            js: {
                options: {
                    sourceMap: true,
                },
                src: ['src/js/todoApp.module.js', 'src/js/*.js'],
                dest: 'build/js/main.js'
            }
        },

        watch: {
            sass: {
                files: ['src/sass/**/*.scss'],
                tasks: ['sass']
            },
            js: {
                files: ['src/js/*.js'],
                tasks: ['jshint', 'test', 'concat']
            },
            html: {
                files: ['src/index.html'],
                tasks: ['copy:html']
            }
        },

        karma: {
                all: {
                    options: {
                        frameworks: ['chai', 'mocha'],
                        client: {
                            mocha: {
                                ui: 'tdd'
                            }
                        },
                        browsers: ['PhantomJS'],
                        singleRun: true,
                        files: [
                            'node_modules/angular/angular.js',
                            'node_modules/angular-mocks/angular-mocks.js',
                            'src/js/*.module.js',
                            'src/js/**/*.js',
                            'test/specs/**/*.js'
                        ],
                        preprocessors: {
                        'src/js/**/*.js': ['coverage']
                        },
                        reporters: ['dots', 'coverage'],
                        coverageReporter: {
                            type: 'text-summary'
                        }
                    }
                }
            }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('test', ['karma']);
    grunt.registerTask('build', ['clean', 'jshint', 'test', 'concat', 'sass', 'copy']);
    grunt.registerTask('default', ['build']);

};
