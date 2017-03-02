import Ember from 'ember'

export default Ember.Route.extend({
	controllerName: 'tags',

	titleToken: `Tags`,

	model() {
		return this.store.findAll('tag')
	}
})
