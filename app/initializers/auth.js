import Ember from 'ember'

export function initialize() {
	Ember.Route.reopen({
		beforeModel(transition) {
			const skip = ['login']

			let token = localStorage.getItem('ape-admin-token')
			let target = transition.targetName.split('.').shift()

			if (token && skip.indexOf(target) >= 0) {
				this.replaceWith('index')
			} else if (!token && skip.indexOf(target) < 0) {
				this.replaceWith('login')
			}
		}
	})
}

export default {
	name: 'auth',
	initialize
}
