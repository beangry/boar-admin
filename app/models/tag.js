import DS from 'ember-data'

export default DS.Model.extend({
	name: DS.attr(),
	type: DS.attr(),
	order: DS.attr(),
	related: DS.attr()
})
