import Ember from 'ember'

export function initialize() {
	Ember.LinkComponent.reopen({
		attributeBindings: ['data-tooltip', 'data-tooltip-direction'],
		classNameBindings: ['data-tooltip:with-tooltip'],

		didInsertElement() {
			let message = this.$().data('tooltip')
			let direction = this.$().data('tooltip-direction') || 'right'

			if (message) {
				let tooltip = Ember.$('<div>').addClass('tooltip').addClass(direction).addClass('distant').text(message)

				this.$().append(tooltip)
			}
		}
	})
}

export default {
	name: 'reopen',
	initialize
}
