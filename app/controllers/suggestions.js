import Ember from 'ember'

export default Ember.Controller.extend({
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
				.then(data =>
					this.store.createRecord('tag', {
						name: data.name,
						type: data.type,
						order: data.order
					}).save().then()
				)
		},
		remove(suggestion) {
			Dialog.confirm(`Are you sure?`)
				.then(() => suggestion.destroyRecord())
		}
	}
})
