import Ember from 'ember'

export default Ember.Controller.extend({
	actions: {
		remove(suggestion) {
			Dialog.confirm(`Are you sure?`)
				.then(() => suggestion.destroyRecord())
		}
	}
})
