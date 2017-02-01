module.exports = function(environment) {
	var ENV = {
		modulePrefix: 'boar-admin',
		environment: environment,
		rootURL: '/admin/',
		locationType: 'auto',
		EmberENV: {
			FEATURES: {},
			EXTEND_PROTOTYPES: {
				Date: false
			}
		},

		APP: {
			api: {
				host: 'https://boar-api.herokuapp.com',
				namespace: 'v1'
			}
		},

		pace: {
			color: 'silver'
		}
	}

	if (environment === 'development') {
		ENV.APP.api.host = 'http://localhost:3000'
	}

	if (environment === 'test') {
		ENV.locationType = 'none'

		ENV.APP.LOG_ACTIVE_GENERATION = false
		ENV.APP.LOG_VIEW_LOOKUPS = false

		ENV.APP.rootElement = '#ember-testing'
	}

	if (environment === 'production') {}

	return ENV
}
