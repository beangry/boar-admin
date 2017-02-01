import Ember from 'ember'

export default Ember.Route.extend({
	title(tokens) {
		tokens.unshift('Boar')

		return tokens.join(' » ')
	}
})
