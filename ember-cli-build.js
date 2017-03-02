var EmberApp = require('ember-cli/lib/broccoli/ember-app')

module.exports = function(defaults) {
	var app = new EmberApp(defaults, {
		autoprefixer: {
			cascade: false
		}
	})

	app.import('bower_components/chart.js/dist/Chart.min.js')

	app.import('vendor/dialogs/dialogs.js')
	app.import('vendor/dialogs/dialogs.css')

	return app.toTree()
}
