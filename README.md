# grunt-motleycss

> A grunt plugin for running Motley CSS during build.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-motleycss --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-motleycss');
```

Another option is to add grunt-motleycss to your npm package if that is in your project. use version 1.0.4

## The "motleycss" task

### Overview
In your project's Gruntfile, add a section named `motleycss` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  motleycss: {
    options: {
      fileName:'someLargeCssFile.css',
      diagnostics:false,
      callback:function () {},
      limit:4095
    }
  },
});
```
<p>Go to the motley css github project to find out more on the options</p>