import Ember from 'ember'

const component = Ember.Component.extend({
	classNames: ['error'],

	messageChanged: Ember.observer('error', function() {
		let message = this.get('error.errors.firstObject.detail.message')

		if (message) {
			this.$().text(message)
		}
	})
})

component.reopenClass({
	positionalParams: ['error']
})

export default component
