import Ember from 'ember'

export default Ember.Service.extend({
	storage: Ember.inject.service(),

	token: Ember.computed(function() {
		return this.get('storage').get('token')
	}).volatile()
})
