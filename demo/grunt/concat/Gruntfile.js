module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        concat: {
            js: {
                src: ['js/file1.js', 'js/file2.js'],
                dest: 'dist/js/scripts.js',
            },
            css: {
                src: ['css/file1.css', 'css/file2.css'],
                dest: 'dist/css/styles.css',
            },
        },

        watch: {
            js: {
                files: ['js/**/*.js'],
                tasks: ['concat:js'],
            },
            css: {
                files: ['css/**/*.css'],
                tasks: ['concat:css'],
            },
        },
    });

    grunt.registerTask('hello', function() {
        console.log("Hello");
    });

    grunt.registerTask('world', function() {
        console.log("World");
    });

    // Register a sequence of tasks to run
    grunt.registerTask('speak', ['hello', 'world']);

    // A default task that runs when node is called without an argument
    grunt.registerTask('default', 'speak');

    // Load the concat module
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
}

