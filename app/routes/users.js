import Ember from 'ember'

export default Ember.Route.extend({
	ajax: Ember.inject.service(),

	titleToken: 'Users',

	model() {
		return this.get('ajax').request('/data/users')
	}
})
