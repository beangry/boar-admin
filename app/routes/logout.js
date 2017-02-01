import Ember from 'ember'

export default Ember.Route.extend({
	auth: Ember.inject.service(),
	storage: Ember.inject.service(),

	activate() {
		this.get('storage').remove('token')
		this.get('auth').notifyPropertyChange('token')

		this.transitionTo('login')
	}
})
