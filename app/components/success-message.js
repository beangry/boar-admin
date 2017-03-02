import Ember from 'ember'

const component = Ember.Component.extend({
	classNames: ['success'],

	didInsertElement() {
		this.messageChanged()
	},

	messageChanged: Ember.observer('message', function() {
		if (this.message) {
			this.$().addClass('visible').text(this.message)
		}
	}),

	click() {
		this.$().removeClass('visible').text('')

		this.set('message', null)
	}
})

component.reopenClass({
	positionalParams: ['message']
})

export default component
