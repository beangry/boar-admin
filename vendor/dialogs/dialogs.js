class Dialog {
	static alert(message) {
		return this.dialog('alert', message, ['Okay'])
	}

	static confirm(message, buttons = ['Yes', 'No']) {
		return this.dialog('confirm', message, buttons)
	}

	static prompt(message, value, buttons = ['Okay', 'Cancel']) {
		return this.dialog('prompt', message, buttons, value)
	}

	static dialog(type, message, buttons = [], promptValue) {
		return new Promise(resolve => {
			let overlay = $('<div>').addClass('overlay')
			let dialog = $('<div>')

			dialog.addClass('dialog').addClass(type)

			$('<p>').text(message).appendTo(dialog)

			if (type === 'prompt') {
				$('<input>').prop('type', 'text').val(promptValue).appendTo(dialog)
			}

			if (type === 'prompt') {
				dialog.wrapInner('<label>')
			}

			let footer = $('<footer>')

			buttons.forEach((button, index) => {
				$('<button>').text(button).on('click', () => {
					if (index === 0) {
						if (type === 'prompt') {
							let data = dialog.find('input').val().trim()

							if (data.length > 0) {
								resolve(data)
							}
						} else {
							resolve()
						}
					}

					overlay.fadeOut('fast', () => overlay.remove())
				}).appendTo(footer)
			})

			dialog.append(footer)

			overlay.append(dialog).on('click', e => {
				if ($(e.target).hasClass('overlay')) {
					overlay.fadeOut('fast', () => overlay.remove())
				}
			}).hide().appendTo('body').fadeIn('fast', () => dialog.find('input').focus())
		})
	}
}
