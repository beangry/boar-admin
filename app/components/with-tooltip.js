import Ember from 'ember'

const component = Ember.Component.extend({
	classNames: ['with-tooltip'],

	direction: 'right',
	immediate: false,

	didInsertElement() {
		if (this.message) {
			let tooltip = Ember.$('<div>').addClass('tooltip').addClass(this.direction).addClass(this.immediate || 'distant').text(this.message)

			this.$().append(tooltip)
		}
	},

	click() {
		this.sendAction()
	}
})

component.reopenClass({
	positionalParams: ['message', 'direction', 'immediate']
})

export default component
