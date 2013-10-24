// Closure task for grunt
module.exports = function(grunt) {
    'use strict';

    var exec = require('child_process').exec;

    grunt.registerTask('closure', 'Closure compoiler task.', function() {
        var opts = this.options({}),
            js = opts.js.isArray ? opts.js.join(' ') : opts.js,
            jsOut = opts.jsOutputFile,
            compilationLevel = opts.compilationLevel || 'SIMPLE_OPTIMIZATIONS',
            command = 'java -jar "' + opts.closureJar + '"',
            done = this.async();

        grunt.log.ok(__dirname);
        if (!js) {
            grunt.log.error(opts);
            grunt.warn('No input file specified.');
            return false;
        } else if (!jsOut) {
            grunt.warn('No output path specified.');
            return false;
        } else if (!opts.closureJar) {
            grunt.warn('No jar file specified.');
            return false;
        } else if (
            ['SIMPLE_OPTIMIZATIONS',
            'ADVANCED_OPTIMIZATIONS',
            'WHITESPACE_ONLY'].indexOf(compilationLevel) === -1) {

            grunt.warn(compilationLevel + 'is not a valid compilation level.');
        }

        command += ' --js "' + js +
            '" --js_output_file "' + jsOut +
            '" --compilation_level ' + compilationLevel +
            ' --summary_detail_level 3';
        grunt.file.write(jsOut, '');
        exec(command, function(error, stdout, stderr) {
            grunt.log.ok(stderr);
            if (!error) {
                grunt.log.ok();
                done();
            }
        });
    });
};