# grunt-simple-closure-compiler

> A simple, one step, Grunt task for Google Closure Compiler

## Getting Started
This plugin requires Grunt `0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-simple-closure-compiler --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-simple-closure-compiler');
```

## The "closure" task

### Overview
In your project's Gruntfile, add a section named `closure` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  closure: {
    options: {
      js: 'path/to/input.js',
      jsOutputFile: 'path/to/output.js',
      compilationLevel: 'SIMPLE_OPTIMIZATIONS'
    }
  },
})
```

### Options

#### options.js
Type: `String` or `Array`
Required

The path to the input file (or files) that will be compiled.

#### options.jsOutputFile
Type: `String`
Required

The path to the output file.

#### options.compilationLevel
Type: `String`
Default value: `SIMPLE_OPTIMIZATIONS`

The compilation level that should be used when compiling .js files. Applicable values are:

* 'SIMPLE_OPTIMIZATIONS'
* 'ADVANCED_OPTIMIZATIONS'
* 'WHITESPACE_ONLY'

### Usage Examples

#### Default Options
In this example, the file foo.js will be compiled and output to foo.min.js using simple optimization.

```js
grunt.initConfig({
  grunt-simple-closure-compiler: {
    options: {
      js: 'foo.js',
      jsOutputFile: 'foo.min.js'
    }
  },
})
```

## Updates
Latest version of closure compiler added 2013/10/23.
