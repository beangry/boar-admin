import Ember from 'ember'

const component = Ember.Component.extend({
	classNames: ['auto-complete'],

	didInsertElement() {
		this.$('input').on('focus', () => this.set('open', true))
		this.$('input').on('blur', () => this.set('open', false))
	},

	click(e) {
		let target = Ember.$(e.target)

		if (target.prop('tagName').toLowerCase() === 'li') {
			// this.set('open', false)
		}
	},

	results: Ember.computed('content', 'content.[]', 'value', function() {
		if (!this.content) {
			throw new Error(`Content cannot be null`)
		}

		let value

		if (this.value === undefined) {
			value = ''
		} else {
			value = this.value.toLowerCase().trim()
		}

		if (value.length > 0) {
			return this.content.filter(item => item.label.toLowerCase().indexOf(value) >= 0)
		} else {
			return this.content
		}
	})
})

component.reopenClass({
	positionalParams: ['content', 'value']
})

export default component
