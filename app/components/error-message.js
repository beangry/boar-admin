import Ember from 'ember'

const component = Ember.Component.extend({
	classNames: ['error'],

	messageChanged: Ember.observer('error', function() {
		if (this.error) {
			let error = this.get('error.errors.firstObject.detail')

			if (error && error.message) {
				this.$().addClass('visible').text(error.message)
			} else if (error) {
				this.$().addClass('visible').text(`Something went wrong`)
			}
		}
	}),

	click() {
		this.$().removeClass('visible').text('')

		this.set('error', null)
	}
})

component.reopenClass({
	positionalParams: ['error']
})

export default component
