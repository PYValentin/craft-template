module.exports = (grunt) => {
	grunt.config.merge({
		babel: {
			options: {
				sourceMap: false,
				presets: [[
					'@babel/preset-env',
					{
						modules: false,
						targets: {
							ie: 11
						}
					}
				]],
				minified: true,
				comments: false,
				plugins: []
			},
			dist: {
				files: {
					'web/assets/js/<%= pkg.name %>.min.js': 'web/assets/js/<%= pkg.name %>.js'
				}
			}
		}
	});
};
