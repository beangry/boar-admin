import DS from 'ember-data'

export default DS.Model.extend({
	user: DS.attr(),
	tag: DS.belongsTo(),
	body: DS.attr(),
	hearts: DS.attr(),
	created: DS.attr()
})
