import Ember from 'ember'

const component = Ember.Component.extend({
	classNames: ['chart', 'pie'],

	didInsertElement() {
		Chart.defaults.global.defaultFontFamily = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`

		Chart.defaults.global.tooltips.xPadding = 10
		Chart.defaults.global.tooltips.yPadding = 10
		Chart.defaults.global.tooltips.displayColors = false

		let context = this.$('canvas')

		new Chart(context, {
			type: 'pie',
			data: {
				labels: this.labels,
				datasets: [{
					backgroundColor: [
						'#999',
						'#888',
						'#777',
						'#666',
						'#555',
						'#444',
						'#333',
						'#222',
						'#111'
					],
					data: this.data,
					label: this.label
				}]
			},
			options: {
				legend: {
					display: false
				},
				title: {
					display: true,
					fontStyle: 'normal',
					text: this.label
				},
				scales: {
					xAxes: [{
						display: false
					}],
					yAxes: [{
						display: false
					}]
				}
			}
		})
	}
})

component.reopenClass({
	positionalParams: ['label', 'labels', 'data']
})

export default component
