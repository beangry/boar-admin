import Ember from 'ember'
import DS from 'ember-data'

export default Ember.Controller.extend({
	ajax: Ember.inject.service(),

	tags: Ember.computed.sort('model', 'sort'),
	sort: ['order:asc', 'name:asc'],

	types: Ember.computed(function() {
		return DS.PromiseArray.create({
			promise: this.get('ajax').request('/data/tags')
				.then(types =>
					types.map(type => ({
						label: type.name,
						value: type.order
					}))
				)
		})
	}),

	actions: {
		create() {
			if (this.name && this.type && this.order) {
				this.setProperties({
					busy: true,
					error: null
				})

				let data = {
					name: this.name,
					type: this.type,
					order: this.order,
					related: this.related
				}

				let tag = this.store.createRecord('tag', data)

				tag.save()
					.then(tag => {
						this.setProperties({
							busy: false,
							name: null,
							type: null,
							order: null,
							related: null
						})

						this.transitionToRoute('tags.tag', tag)
					})
					.catch(error => {
						this.setProperties({
							busy: false,
							error
						})

						tag.destroyRecord()
					})
			}
		},
		select(type) {
			this.setProperties({
				type: type.label,
				order: type.value
			})
		},
		save() {
			this.setProperties({
				busy: true,
				error: null
			})

			this.model.save()
				.then(() =>
					this.setProperties({
						busy: false,
						message: `Saved`
					})
				)
				.catch(error =>
					this.setProperties({
						busy: false,
						error
					})
				)
		},
		update(type) {
			this.setProperties({
				'model.type': type.label,
				'model.order': type.value
			})
		}
	}
})
