/* jshint node:true */
module.exports = function(grunt){
	'use strict';

	var libs = {
			aos: true,
			bootstrap: true,
			fontawesome: true,
			gridstack: false,
			html5shiv: true,
			jquery: true,
			lodash: false,
			tinymce: true,
			picturefill: true,
			swiper: true,
			tether: true,
			woocommerce: false,
			cycle2: false,
			mask: true
	};


	require('load-grunt-tasks')(grunt);

	// Initialize Grunt Config

	grunt.initConfig({

		// Gets the package vars
		pkg: grunt.file.readJSON('package.json'),

		// Setting folder templates
		dirs: {
			css: '../css',
			js: '../js',
			sass: '../sass',
			images: '../images',
			fonts: '../fonts',
			tmp: 'tmp',
			jqver: '3.2.1'
		},

		// Downloads dependencies
		curl: {
			jquery: {
				src: 'https://code.jquery.com/jquery-<%= dirs.jqver %>.js',
				dest: '<%= dirs.js %>/libs/jquery.js'
			},
			lodash: {
				src: 'https://raw.githubusercontent.com/lodash/lodash/4.17.4/dist/lodash.js',
				dest: '<%= dirs.js %>/libs/lodash.js'
			},
			tinymce: {
				src: 'https://raw.githubusercontent.com/tinymce/tinymce-dist/master/tinymce.min.js',
				dest: '<%= dirs.js %>/libs/tinymce.min.js'
			},
			html5shiv: {
				src: 'https://github.com/aFarkas/html5shiv/archive/master.zip',
				dest: '<%= dirs.tmp %>/html5shiv.zip'
			},
			bootstrap: {
				src: 'https://github.com/twbs/bootstrap/archive/v4.0.0-alpha.6.zip',
				dest: '<%= dirs.tmp %>/bootstrap.zip'
			},
			tether: {
				src: 'https://github.com/HubSpot/tether/archive/master.zip',
				dest: '<%= dirs.tmp %>/tether.zip'
			},
			fontawesome: {
				src: 'https://github.com/FortAwesome/Font-Awesome/archive/master.zip',
				dest: '<%= dirs.tmp %>/fontawesome.zip'
			},
			woocommerce: {
				src: 'https://github.com/woothemes/woocommerce/archive/master.zip',
				dest: '<%= dirs.tmp %>/woocommerce.zip'
			},
			swiper: {
				src: 'https://github.com/nolimits4web/Swiper/archive/master.zip',
				dest: '<%= dirs.tmp %>/swiper.zip'
			}, 
			gridstack: {
				src: 'https://github.com/troolee/gridstack.js/archive/develop.zip',
				dest: '<%= dirs.tmp %>/gridstack.zip'
			},
			picturefill: {
				src: 'https://github.com/scottjehl/picturefill/archive/master.zip',
				dest: '<%= dirs.tmp %>/picturefill.zip'
			},
			aos: {
				src: 'https://github.com/michalsnik/aos/archive/master.zip',
				dest: '<%= dirs.tmp %>/aos.zip'
			},
			cycle2: {
				src: 'https://github.com/malsup/cycle2/archive/master.zip',
				dest: '<%= dirs.tmp %>/cycle2.zip'
			},
			mask: {
				src: 'https://github.com/igorescobar/jQuery-Mask-Plugin/archive/master.zip',
				dest: '<%= dirs.tmp %>/mask.zip'
			}
		},

		// Unzip files
		unzip: {
			html5shiv: {
				src: '<%= dirs.tmp %>/html5shiv.zip',
				dest: '<%= dirs.tmp %>'
			},
			bootstrap: {
				src: '<%= dirs.tmp %>/bootstrap.zip',
				dest: '<%= dirs.tmp %>'
			},
			tether: {
				src: '<%= dirs.tmp %>/tether.zip',
				dest: '<%= dirs.tmp %>'
			},
			fontawesome: {
				src: '<%= dirs.tmp %>/fontawesome.zip',
				dest: '<%= dirs.tmp %>'
			},
			woocommerce: {
				src: '<%= dirs.tmp %>/woocommerce.zip',
				dest: '<%= dirs.tmp %>'
			},
			swiper: {
				src: '<%= dirs.tmp %>/swiper.zip',
				dest: '<%= dirs.tmp %>'
			},
			gridstack: {
				src: '<%= dirs.tmp %>/gridstack.zip',
				dest: '<%= dirs.tmp %>'
			},
			picturefill: {
				src: '<%= dirs.tmp %>/picturefill.zip',
				dest: '<%= dirs.tmp %>'
			},
			aos: {
				src: '<%= dirs.tmp %>/aos.zip',
				dest: '<%= dirs.tmp %>/'
			},
			cycle2: {
				src: '<%= dirs.tmp %>/cycle2.zip',
				dest: '<%= dirs.tmp %>/'
			},
			mask: {
				src: '<%= dirs.tmp %>/mask.zip',
				dest: '<%= dirs.tmp %>/'
			}
		},

		// Renames and moves directories and files
		rename: {
			html5shiv_js: {
				src: '<%= dirs.tmp %>/html5shiv-master/dist/html5shiv.js',
				dest: '<%= dirs.js %>/libs/html5shiv.js'
			},
			bootstrap_scss: {
				src: '<%= dirs.tmp %>/bootstrap-4.0.0-alpha.6/scss/',
				dest: '<%= dirs.sass %>/bootstrap'
			},
			bootstrap_js: {
				src: '<%= dirs.tmp %>/bootstrap-4.0.0-alpha.6/dist/js/bootstrap.js',
				dest: '<%= dirs.js %>/libs/bootstrap.js'
			},
			bootstrap_files: {
				files: [
					{
						src: '<%= dirs.sass %>/bootstrap/bootstrap.scss', 
						dest: '<%= dirs.sass %>/bootstrap/_bootstrap.scss'
					},
					{
						src: '<%= dirs.sass %>/bootstrap/bootstrap-grid.scss', 
						dest: '<%= dirs.sass %>/bootstrap/_bootstrap-grid.scss'
					},
					{
						src: '<%= dirs.sass %>/bootstrap/bootstrap-reboot.scss', 
						dest: '<%= dirs.sass %>/bootstrap/_bootstrap-reboot.scss'
					}
				]
			},
			tether_js: {
				src: '<%= dirs.tmp %>/tether-master/dist/js/tether.js',
				dest: '<%= dirs.js %>/libs/tether.js'
			},
			fontawesome_scss: {
				src: '<%= dirs.tmp %>/Font-Awesome-master/scss/',
				dest: '<%= dirs.sass %>/fontawesome'
			},
			fontawesome_fonts: {
				src: '<%= dirs.tmp %>/Font-Awesome-master/fonts/',
				dest: '<%= dirs.fonts %>/fontawesome'
			},
			fontawesome_files: {
				src: '<%= dirs.sass %>/fontawesome/font-awesome.scss',
				dest: '<%= dirs.sass %>/fontawesome/_font-awesome.scss'
			},
			woocommerce_scss: {
				src: '<%= dirs.tmp %>/woocommerce-master/assets/css/',
				dest: '<%= dirs.sass %>/woocommerce'
			},
			woocommerce_scss_woocommerce: {
				src: '<%= dirs.sass %>/woocommerce/woocommerce.scss',
				dest: '<%= dirs.sass %>/woocommerce/_woocommerce.scss'
			},
			woocommerce_scss_woocommerce_layout: {
				src: '<%= dirs.sass %>/woocommerce/woocommerce-layout.scss',
				dest: '<%= dirs.sass %>/woocommerce/_woocommerce-layout.scss'
			},
			woocommerce_scss_woocommerce_smallscreen: {
				src: '<%= dirs.sass %>/woocommerce/woocommerce-smallscreen.scss',
				dest: '<%= dirs.sass %>/woocommerce/_woocommerce-smallscreen.scss'
			},
			woocommerce_fonts: {
				src: '<%= dirs.tmp %>/woocommerce-master/assets/fonts/',
				dest: '<%= dirs.fonts %>/woocommerce'
			},
			woocommerce_images: {
				src: '<%= dirs.tmp %>/woocommerce-master/assets/images/',
				dest: '<%= dirs.images %>/woocommerce'
			},
			swiper_css: {
				src: '<%= dirs.tmp %>/Swiper-master/dist/css/swiper.css',
				dest: '<%= dirs.sass %>/swiper/_swiper.scss'
			},
			swiper_js: {
				src: '<%= dirs.tmp %>/Swiper-master/dist/js/swiper.js',
				dest: '<%= dirs.js %>/libs/swiper.js'
			},
			gridstack_scss: {
				src: '<%= dirs.tmp %>/gridstack.js-develop/src/gridstack.scss',
				dest: '<%= dirs.sass %>/gridstack/_gridstack.scss'
			},
			gridstack_js: {
				src: '<%= dirs.tmp %>/gridstack.js-develop/dist/gridstack.js',
				dest: '<%= dirs.js %>/libs/gridstack.js'
			},
			picturefill_js: {
				src: '<%= dirs.tmp %>/picturefill-master/dist/picturefill.js',
				dest: '<%= dirs.js %>/libs/picturefill.js'
			},
			aos_scss: {
				src: '<%= dirs.tmp %>/aos-master/src/sass/',
				dest: '<%= dirs.sass %>/aos'
			},
			aos_js: {
				src: '<%= dirs.tmp %>/aos-master/dist/*.js',
				dest: '<%= dirs.js %>/libs/aos.min.js'
			},
			aos_files: {
				src: '<%= dirs.sass %>/aos/aos.scss',
				dest: '<%= dirs.sass %>/aos/_aos.scss'
			},
			cycle2: {
				src: '<%= dirs.tmp %>/cycle2-master/src',
				dest: '<%= dirs.js %>/cycle2'
			},
			mask: {
				src: '<%= dirs.tmp %>/jQuery-Mask-Plugin-master/src/*.js',
				dest: '<%= dirs.js %>/libs/mask.js'
			}
		},

		concat: {
      		options: { 
		        separator: '\n',
		        banner: '/*!\n* jQuery Cycle2; version: <%=pkg.version %> build: <%= grunt.template.today("yyyymmdd") %>\n' +
		          '* http://jquery.malsup.com/cycle2/\n' +
		          '* Copyright (c) <%= grunt.template.today("yyyy") %> M. Alsup; Dual licensed: MIT/GPL\n*/\n\n'
		    },
		    cycle2: {
		      	src: [
			        '<%= dirs.js %>/cycle2/jquery.cycle2.core.js',
			        '<%= dirs.js %>/cycle2/jquery.cycle2.autoheight.js',
			        '<%= dirs.js %>/cycle2/jquery.cycle2.caption.js',
			        '<%= dirs.js %>/cycle2/jquery.cycle2.command.js',
			        '<%= dirs.js %>/cycle2/jquery.cycle2.hash.js',
			        '<%= dirs.js %>/cycle2/jquery.cycle2.loader.js',
			        '<%= dirs.js %>/cycle2/jquery.cycle2.pager.js',
			        '<%= dirs.js %>/cycle2/jquery.cycle2.prevnext.js',
			        '<%= dirs.js %>/cycle2/jquery.cycle2.progressive.js',
			        '<%= dirs.js %>/cycle2/jquery.cycle2.tmpl.js'
		      	],
		      	dest: '<%= dirs.js %>/libs/jquery.cycle2.js'
	    	}
	    },

		// Javascript linting with jshint
		jshint: {
			options: {
				jshintrc: '<%= dirs.js %>/.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'<%= dirs.js %>/libs/main.js'
			]
		},

		// Uglify to concat and minify
		uglify: {				
			dist: {
				files: {
					'<%= dirs.js %>/main.min.js': [
						'<%= dirs.js %>/libs/jquery.js',
						'<%= dirs.js %>/libs/lodash.js',
						'<%= dirs.js %>/libs/tinymce.min.js',										
						'<%= dirs.js %>/libs/tether.js',											
						'<%= dirs.js %>/libs/bootstrap.js',
						'<%= dirs.js %>/libs/html5shiv.js',
						'<%= dirs.js %>/libs/swiper.js',
						'<%= dirs.js %>/libs/picturefill.js',
						'<%= dirs.js %>/libs/gridstack.js',
						'<%= dirs.js %>/libs/aos.min.js',
						'<%= dirs.js %>/libs/jquery.cycle2.js',
						'<%= dirs.js %>/libs/mask.js',
						'<%= dirs.js %>/libs/main.js'
					]
				}
			}							
		},

		// Compile scss/sass files to CSS
		sass: {
			dist: {
				options: {
					style: 'normal', // Style: compressed|normal
					sourcemap: 'none'
				},
				files: [{
					expand: true,
					cwd: '<%= dirs.sass %>',
					src: ['*.scss'],
					dest: '<%= dirs.css %>',
					ext: '.css'
				}]
			}
		},

		// Add fallbacks multi browser
		postcss: {
			options: {
				map: {
					inline: false, // Save all sourcemaps as separate files
					annotation: '<%= dirs.css %>/maps' // To the specified directory
				},
				processors: [
					require('pixrem')(), // Add fallbacks for rem units
					require('autoprefixer')({browsers: 'last 2 versions'})//, // Add vendor prefixes
					//require('cssnano')() // Minify the result
				]
			},
			dist: {
				src: '<%= dirs.css %>/*.css'
			}
		},

		// Image optimization
		imagemin: {
			dist: {
				options: {
					optimizationLevel: 10,
					progressive: true
				},
				files: [{
					expand: true,
					filter: 'isFile',
					cwd: '<%= dirs.images %>',
					src: '**/*.{png,jpg,gif}',
					dest: '<%= dirs.images %>'
				}]
			}
		},

		// Clean directories and files
		clean: {
			options: {
				force: true
			},
			jquery_prepare: [
				'<%= dirs.js %>/libs/jquery.js'
			],
			lodash_prepare: [
				'<%= dirs.js %>/libs/lodash.js'
			],
			tinymce_prepare: [
				'<%= dirs.js %>/libs/tinymce.min.js'
			],			
			html5shiv_prepare: [
				'<%= dirs.js %>/libs/html5shiv.js'
			],
			bootstrap_prepare: [
				'<%= dirs.sass %>/bootstrap',
				'<%= dirs.js %>/bootstrap',
				'<%= dirs.js %>/libs/bootstrap.min.js',
				'<%= dirs.fonts %>/bootstrap'
			],
			tether_prepare: [
				'<%= dirs.js %>/libs/tether.js'
			],
			fontawesome_prepare: [
				'<%= dirs.sass %>/fontawesome',
				'<%= dirs.fonts %>/fontawesome'
			],		
			woocommerce_prepare: [
				'<%= dirs.sass %>/woocommerce',
				'<%= dirs.fonts %>/woocommerce',
				'<%= dirs.images %>/woocommerce'
			],
			woocommerce: [
				'<%= dirs.sass %>/woocommerce/{activation,admin,chosen,dashboard,menu,prettyPhoto,reports-print,select2}**',
				'<%= dirs.sass %>/woocommerce/*.css'
			],
			swiper_prepare: [
				'<%= dirs.sass %>/swiper',
				'<%= dirs.js %>/swiper'
			],
			gridstack_prepare: [
				'<%= dirs.sass %>/gridstack',
				'<%= dirs.js %>/gridstack'
			],
			picturefill_prepare: [
				'<%= dirs.js %>/libs/picturefill.js'
			],
			aos_prepare: [
				'<%= dirs.sass %>/aos/',
				'<%= dirs.js %>/aos/',
				'<%= dirs.js %>/libs/aos.js'
			],
			cycle_prepare: [
				'<%= dirs.js %>/cycle2/',
				'<%= dirs.js %>/libs/jquery.cycle2.js'
			],
			mask_prepare: [
				'<%= dirs.js %>/mask/',
				'<%= dirs.js %>/libs/jquery.mask.js'
			],
			clean_tmp: [
				'<%= dirs.tmp %>'
			] 
		},

		//Clean directories and files
		replace: {
			woocommerce: {
				src: ['<%= dirs.sass %>/woocommerce/*.scss'],
		 		overwrite: true,
				replacements: [
					{
						from: /@import ".+";\n/g,
						to: ''
					},{
						from: '../fonts',
						to: '../fonts/woocommerce'
					},{
						from: '../images',
						to: '../images/woocommerce'
					}
				]
			},
			fontawesome: {
				src: ['<%= dirs.sass %>/fontawesome/_variables.scss'],
				overwrite: true,
				replacements: [
					{
						from: '../fonts',
						to: '../fonts/fontawesome'
					}	
				]
			}
		},

		// Watch for changes and trigger sass, postcss, jshint, uglify and livereload browser
		watch: {
			js: {
				files: [
					'<%= jshint.all %>'
				],
				tasks: ['jshint', 'uglify']
			},
			sass: {
				files: [
					'<%= dirs.sass %>/**'
				],
				tasks: ['sass', 'postcss']
			},			
			livereload: {
				options: {
					livereload: true
				},
				files: [
					'<%= dirs.css %>/*.css',
					'<%= dirs.js %>/*.js',
					'../**/*.php'
				]
			},
			options: {
				spawn: false
			}
		},

		// Zip the theme
		zip: {
			dist: {
				cwd: '..',
				src: [
					'../**',
					'!../src/**',
					'!../**.md',
					'!<%= dirs.sass %>/**',
					'!<%= dirs.js %>/bootstrap/**',
					'!<%= dirs.js %>/libs/**',
					'!../**.zip',
					'<%= dirs.js %>/main.min.js'
				],
				dest: '../<%= pkg.name %>.zip'
			}
		},

		// Deploy via rsync
		rsync: {
			options: {
				args: ['--verbose'],
				exclude: [
					'**.DS_Store',
					'**Thumbs.db',
					'.editorconfig',
					'.git',
					'.gitignore',
					'.jshintrc',
					'sass',
					'src',
					'README.md',
					'.ftppass'
				],
				recursive: true,
				syncDest: true
			},
			staging: {
				options: {
					src: '..',
					dest: '~/PATH/wp-content/themes/atras-da-porta',
					host: 'user@host.com'
				}
			},
			production: {
				options: {
					src: '..',
					dest: '~/PATH/wp-content/themes/atras-da-porta',
					host: 'user@host.com'
				}
			}
		},

		// FTP deploy
		'ftp-deploy': {
			build: {
				auth: {
					host: 'ftp.SEU-SITE.com',
					port: 21,
					authPath: '../.ftppass',
					authKey: 'key_for_deploy'
				},
				src: '..',
				dest: '/PATH/wp-content/themes/atras-da-porta',
				exclusions: [
					'../**.DS_Store',
					'../**Thumbs.db',
					'../.git/*',
					'../*.md',
					'../.gitignore',
					'../assets/js/**bootstrap',
					'../assets/js/**libs',
					'../assets/js/plugins.js',
					'../assets/js/main.js',
					'../*.zip',
					'../*.sublime-project',
					'../*.sublime-workspace',
					'../src/**',
					'../.ftppass'
				]
			}
		},		

	});

	// Register Task

	// Default Task
	grunt.registerTask('default', [
		'jshint',
		'uglify',
		'sass'
	]);

	// Optimize Images Task
	grunt.registerTask('optimize', [
		'imagemin'
	]);

	// jQuery Task
	grunt.registerTask('jquery', [
		'clean:clean_tmp',
		'clean:jquery_prepare',
		'curl:jquery',
		'clean:clean_tmp'
	]);

	// Lodash Task
	grunt.registerTask('lodash', [
		'clean:clean_tmp',
		'clean:lodash_prepare',
		'curl:lodash',
		'clean:clean_tmp'
	]);	

	// Lodash Task
	grunt.registerTask('tinymce', [
		'clean:clean_tmp',
		'clean:tinymce_prepare',
		'curl:tinymce',
		'clean:clean_tmp'
	]);		

	// Html5shiv Task
	grunt.registerTask('html5shiv', [
		'clean:clean_tmp',
		'clean:html5shiv_prepare',
		'curl:html5shiv',
		'unzip:html5shiv',
		'rename:html5shiv_js',
		'clean:clean_tmp'
	]);		

	// Bootstrap Task
	grunt.registerTask('bootstrap', [
		'clean:clean_tmp',
		'clean:bootstrap_prepare',
		'curl:bootstrap',
		'unzip:bootstrap',
		'rename:bootstrap_scss',
		'rename:bootstrap_js',
		'rename:bootstrap_files',
		'clean:clean_tmp'
	]);

	// Tether Task
	grunt.registerTask('tether', [
		'clean:clean_tmp',
		'clean:tether_prepare',
		'curl:tether',
		'unzip:tether',
		'rename:tether_js',
		'clean:clean_tmp'
	]);		

	// Fontawesome Task
	grunt.registerTask('fontawesome', [
		'clean:clean_tmp',
		'clean:fontawesome_prepare',
		'curl:fontawesome',
		'unzip:fontawesome',
		'rename:fontawesome_scss',
		'rename:fontawesome_fonts',
		'rename:fontawesome_files',
		'replace:fontawesome',
		'clean:clean_tmp'
	]);	

	// Woocommerce Task
	grunt.registerTask('woocommerce', [
		'clean:clean_tmp',
		'clean:woocommerce_prepare',
		'curl:woocommerce',
		'unzip:woocommerce',
		'rename:woocommerce_scss',
		'rename:woocommerce_scss_woocommerce',
		'rename:woocommerce_scss_woocommerce_layout',
		'rename:woocommerce_scss_woocommerce_smallscreen',
		'rename:woocommerce_fonts',
		'rename:woocommerce_images',
		'clean:woocommerce',
		'clean:clean_tmp',
		'replace:woocommerce'
	]);

	// Swiper Task
	grunt.registerTask('swiper', [
		'clean:clean_tmp',
		'clean:swiper_prepare',
		'curl:swiper',
		'unzip:swiper',
		'rename:swiper_css',
		'rename:swiper_js',
		'clean:clean_tmp'
	]);

	// Gridstack Task
	grunt.registerTask('gridstack', [
		'clean:clean_tmp',
		'clean:gridstack_prepare',
		'curl:gridstack',
		'unzip:gridstack',
		'rename:gridstack_scss',
		'rename:gridstack_js',
		'clean:clean_tmp'
	]);		

	// Picturefill Task
	grunt.registerTask('picturefill', [
		'clean:clean_tmp',
		'clean:picturefill_prepare',
		'curl:picturefill',
		'unzip:picturefill',
		'rename:picturefill_js',
		'clean:clean_tmp'
	]);

	// AOS Task
	grunt.registerTask('aos',[
		'clean:clean_tmp',
		'clean:aos_prepare',
		'curl:aos',
		'unzip:aos',
		'rename:aos_scss',
		'rename:aos_js',
		'rename:aos_files',
		'clean:clean_tmp'
	]);

	// Cycle2 Task
	grunt.registerTask('cycle2',[
		'clean:clean_tmp',
		'clean:cycle_prepare',
		'curl:cycle2',
		'unzip:cycle2',
		'rename:cycle2',
		'concat:cycle2',
		'clean:clean_tmp'
	]);

	// Mask Task
	grunt.registerTask('mask',[
		'clean:clean_tmp',
		'clean:mask_prepare',
		'curl:mask',
		'unzip:mask',
		'rename:mask',
		'clean:clean_tmp'
	]);	

	grunt.registerTask('empty',[]);

	// All Tasks
	grunt.registerTask('alltasks', [
		libs.jquery ? 'jquery' : 'empty',
		libs.lodash ? 'lodash': 'empty',
		libs.tinymce ? 'tinymce': 'empty',
		libs.html5shiv ? 'html5shiv': 'empty',
		libs.tether ? 'tether': 'empty',
		libs.bootstrap ? 'bootstrap': 'empty',
		libs.fontawesome ? 'fontawesome': 'empty',
		libs.woocommerce ? 'woocommerce': 'empty',
		libs.swiper ? 'swiper': 'empty',
		libs.gridstack ? 'gridstack': 'empty',
		libs.picturefill ? 'picturefill': 'empty',
		libs.aos ? 'aos': 'empty',
		libs.cycle2 ? 'cycle2': 'empty',
		libs.mask ? 'mask': 'empty',
		'default'
	]);

	/*grunt.registerTask('alltasks', [
		libs.jquery ? 'jquery' : null,
		libs.lodash ? 'lodash': null,
		libs.html5shiv ? 'html5shiv': null,
		libs.tether ? 'tether': null,
		libs.bootstrap ? 'bootstrap': null,
		libs.fontawesome ? 'fontawesome': null,
		libs.woocommerce ? 'woocommerce': null,
		libs.swiper ? 'swiper': null,
		libs.gridstack ? 'gridstack': null,
		libs.picturefill ? 'picturefill': null,
		'default'
	]);*/

	// Deploy Task
	/*
	grunt.registerTask('ftp', [
		'ftp-deploy',
		'zip'
	]);
	*/

	// Short aliases
	grunt.registerTask('w', ['watch']);
	grunt.registerTask('o', ['optimize']);
	grunt.registerTask('f', ['ftp']);
	grunt.registerTask('r', ['rsync']);
	grunt.registerTask('c', ['compress']);
};
