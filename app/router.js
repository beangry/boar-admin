import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
	location: config.locationType,
	rootURL: config.rootURL
})

Router.map(function() {
	this.route('login')
	this.route('logout')

	this.route('tags', function() {
		this.route('new')
		this.route('tag', {
			path: ':id'
		})
	})
	this.route('suggestions')
	this.route('reports')
})

export default Router
