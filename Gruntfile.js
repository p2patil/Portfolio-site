module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    responsive_images: {
    myTask: {
      options: {
        sizes: [{
          width: 320,
          height: 240,
          name:"small"
        },{
          name: 'large',
          width: 640,
          suffix:"_x1"
        },{
          name: "large",
          width: 1024,
          suffix: "_x2",
          quality: 60
        }]
      },
      files: [{
        expand: true,
        src: ['*.{gif,jpg,png,jpeg}'],
        cwd: 'img/',
        dest: 'images/'
      }]
    }
  },
  });


  // Default task(s).
  grunt.registerTask('default', ['responsive_images']);
  grunt.loadNpmTasks('grunt-responsive-images');

};