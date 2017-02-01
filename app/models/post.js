import Ember from 'ember'
import DS from 'ember-data'

export default DS.Model.extend({
	ajax: Ember.inject.service(),

	user: DS.attr(),
	tag: DS.belongsTo(),
	body: DS.attr(),
	hearts: DS.attr(),
	liked: DS.attr(),
	created: DS.attr({
		defaultValue() {
			return Date.now()
		}
	}),
	comments: DS.hasMany({
		async: true
	}),

	_comments: Ember.computed.sort('comments', 'sort'),
	sort: ['created:desc'],

	heart() {
		this.toggleProperty('liked')

		this.get('ajax').post(`posts/${this.id}/heart`)
			.then(data => {
				this.setProperties({
					hearts: data.post.hearts,
					liked: data.post.liked
				})
			})
	}
})
