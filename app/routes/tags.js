import Ember from 'ember'

export default Ember.Route.extend({
	titleToken: 'Tags',

	model() {
		return this.store.findAll('tag')
	}
})
