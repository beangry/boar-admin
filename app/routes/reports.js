import Ember from 'ember'
import InfinityRoute from 'ember-infinity/mixins/route'

export default Ember.Route.extend(InfinityRoute, {
	titleToken: `Reports`,

	totalPagesParam: 'meta.total',

	model() {
		return this.infinityModel('report', {
			startingPage: 0
		})
	}
})
