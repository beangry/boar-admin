import DS from 'ember-data'

export default DS.Model.extend({
	user: DS.attr(),
	post: DS.belongsTo('post'),
	details: DS.attr()
})
