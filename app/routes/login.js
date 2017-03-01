import Ember from 'ember'

export default Ember.Route.extend({
	ajax: Ember.inject.service(),
	auth: Ember.inject.service(),
	storage: Ember.inject.service(),

	titleToken: `Login`,

	actions: {
		login() {
			let controller = this.get('controller')

			let email = controller.email
			let password = controller.password

			if (email && password) {
				controller.setProperties({
					busy: true,
					error: null
				})

				let options = {
					data: JSON.stringify({
						email,
						password
					})
				}

				this.get('ajax').post('/sessions/admin', options)
					.then(data => {
						controller.setProperties({
							busy: false,
							email: null,
							password: null
						})

						this.get('storage').put('token', data.token)
						this.get('auth').notifyPropertyChange('token')

						this.replaceWith('index')
					})
					.catch(error => {
						controller.setProperties({
							busy: false,
							error
						})
					})
			}
		}
	}
})
