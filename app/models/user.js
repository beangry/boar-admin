import DS from 'ember-data'

export default DS.Model.extend({
	reported: DS.attr(),
	notifications: DS.attr(),
	token: DS.attr(),
	device: DS.attr()
})
