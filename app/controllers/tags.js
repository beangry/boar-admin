import Ember from 'ember'
import DS from 'ember-data'

export default Ember.Controller.extend({
	ajax: Ember.inject.service(),

	types: Ember.computed(function() {
		return DS.PromiseArray.create({
			promise: this.get('ajax').request('/tags/data')
		})
	}),

	actions: {
		addTag() {
			let fields = {
				name: {
					label: `Name`,
					value: `Apple`
				},
				type: {
					label: `Type`,
					value: `technology`
				},
				order: {
					label: `Order`,
					value: `3`
				}
			}

			Dialog.multiPrompt(`Add tag`, fields, [`Add`, `Cancel`])
				.then(data => {
					this.store.createRecord('tag', {
						name: data.name,
						type: data.type,
						order: data.order
					}).save().then()
				})
		},
		editTag(tag) {
			let fields = {
				name: {
					label: `Name`,
					value: tag.get('name')
				},
				type: {
					label: `Type`,
					value: tag.get('type')
				},
				order: {
					label: `Order`,
					value: tag.get('order')
				}
			}

			Dialog.multiPrompt(`Edit tag`, fields, [`Save`, `Cancel`])
				.then(data => {
					tag.setProperties({
						name: data.name,
						type: data.type,
						order: data.order
					})

					tag.save()
				})
		}
	}
})
