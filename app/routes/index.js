import Ember from 'ember'

export default Ember.Route.extend({
	ajax: Ember.inject.service(),

	model() {
		return Ember.RSVP.hash({
			meta: this.get('ajax').request('/data')
				.then(meta => {
					let labels = []
					let data = []

					Object.keys(meta).forEach(key => {
						labels.push(key)
						data.push(meta[key])
					})

					return {
						labels,
						data
					}
				}),

			posts: this.get('ajax').request('/data/posts')
				.then(posts => {
					let labels = []
					let data = []

					posts.forEach(post => {
						labels.push(post.label)
						data.push(post.value)
					})

					return {
						labels,
						data
					}
				}),

			users: this.get('ajax').request('/data/users')
				.then(users => {
					let labels = []
					let data = []

					users.forEach(post => {
						labels.push(post.label)
						data.push(post.value)
					})

					return {
						labels,
						data
					}
				})
		})
	}
})
