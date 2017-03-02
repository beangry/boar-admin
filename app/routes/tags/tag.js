import Ember from 'ember'

export default Ember.Route.extend({
	controllerName: 'tags',

	titleToken: `Tag`,

	model(params) {
		return this.store.findRecord('tag', params.id)
	},
	setupController(controller, model) {
		let titleToken = [`Tags`, model.get('name')]

		this.set('titleToken', titleToken)

		this._super(...arguments)
	},

	deactivate() {
		this.get('controller.model').rollbackAttributes()
	}
})
