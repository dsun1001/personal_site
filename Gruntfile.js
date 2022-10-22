module.exports = function(grunt) {
    grunt.initConfig({
      aws: grunt.file.readJSON("./aws-keys.json"),
      aws_s3: {
        options: {
          accessKeyId: "<%= aws.AWSAccessKeyId %>",
          secretAccessKey: "<%= aws.AWSSecretKey %>",
          region: "<%= aws.region %>"
        },
        dist: {
          options: {
            bucket: "davidsun.link",
            differential: true
          },
          files: [
            {
              expand: true,
              cwd: "./",
              src: ["**", 
                "!aws-keys.json", 
                "!Gruntfile.js"],
              dest: ""
            }
          ]
        }
      }
    });
  
    grunt.loadNpmTasks("grunt-aws-s3");

    grunt.registerTask("deploy", "aws_s3");
  };