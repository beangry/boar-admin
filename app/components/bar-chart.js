import Ember from 'ember'

const component = Ember.Component.extend({
	classNames: ['chart', 'bar'],

	didInsertElement() {
		Chart.defaults.global.defaultFontFamily = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`

		Chart.defaults.global.tooltips.xPadding = 10
		Chart.defaults.global.tooltips.yPadding = 10
		Chart.defaults.global.tooltips.displayColors = false

		let context = this.$('canvas')

		new Chart(context, {
			type: 'bar',
			data: {
				labels: this.labels,
				datasets: [{
					backgroundColor: '#999',
					data: this.data,
					fill: false,
					label: this.label,
					lineTension: 0
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
						barThickness: 30,
						gridLines: {
							display: false
						}
					}],
					yAxes: [{
						gridLines: {
							display: false
						},
						ticks: {
							min: 0
						}
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
