import Ember from 'ember'

const component = Ember.Component.extend({
	classNames: ['success'],

	delay: 5000,

	didInsertElement() {
		this.messageChanged()
	},

	messageChanged: Ember.observer('message', function() {
		if (this.message) {
			this.$().addClass('visible').text(this.message)

			Ember.run.later(() => {
				if (!this.isDestroying && !this.isDestroyed) {
					this.$().removeClass('visible').text('')

					this.set('message', null)
				}
			}, this.delay)
		}
	})
})

component.reopenClass({
	positionalParams: ['message']
})

export default component
