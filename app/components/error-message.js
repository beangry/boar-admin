import Ember from 'ember'

const component = Ember.Component.extend({
	classNames: ['error'],

	messageChanged: Ember.observer('error', function() {
		let error = this.get('error.errors.firstObject.detail')

		if (error && error.message) {
			this.$().text(error.message)
		} else if (error) {
			this.$().text(`Something went wrong`)
		}
	})
})

component.reopenClass({
	positionalParams: ['error']
})

export default component
