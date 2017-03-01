import Ember from 'ember'

export default Ember.Route.extend({
	ajax: Ember.inject.service(),

	titleToken: `Posts`,

	model() {
		return this.get('ajax').request('/data/posts')
	}
})
