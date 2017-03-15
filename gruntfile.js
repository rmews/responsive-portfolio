/*
Grunt Wrapper, this tells node we are using grunt! 
 */

 module.exports = function(grunt) {

  grunt.initConfig({
    /* Responsive images module: configuration for new responsive images */
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: '1800_large',
            width: 1800,
            quality: 50
          },{
            name: '1600_large',
            width: 1600,
            quality: 50
          },{
            name: '1200_large',
            width: 1200,
            quality: 50
          },{
            name: '800_large',
            width: 800,
            quality: 50
          },{
            name: 'medium',
            width: 600,
            quality: 50
          },{
            name: 'small',
            width: 400,
            quality: 50
          }]
        },

        /* Set current image directory and new director images will be created */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images_src/fixed/*.{gif,jpg,png}',
          dest: 'images/'
        }]
      },
    },
  });
  
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
