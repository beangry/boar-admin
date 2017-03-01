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
		create(suggestion) {
			let fields = {
				name: {
					label: `Name`,
					value: suggestion.get('tag')
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
		remove(suggestion) {
			Dialog.confirm(`Are you sure?`)
				.then(() => suggestion.destroyRecord())
		}
	}
})
