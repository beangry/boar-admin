import DS from 'ember-data'

export default DS.Transform.extend({
	deserialize(data) {
		return data.join('\n')
	},
	serialize(data) {
		return data && data.split('\n').reject(tag => tag.length === 0)
	}
})
