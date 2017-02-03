import Ember from 'ember'
import InfinityRoute from 'ember-infinity/mixins/route'

export default Ember.Route.extend(InfinityRoute, {
	titleToken: 'Suggestions',

	totalPagesParam: 'meta.total',

	model() {
		return this.infinityModel('suggestion', {
			startingPage: 0
		})
	}
})
