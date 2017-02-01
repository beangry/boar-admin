import DS from 'ember-data'

export default DS.Model.extend({
	user: DS.attr(),
	post: DS.attr(),
	details: DS.attr()
})
