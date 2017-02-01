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

	static multiPrompt(message, fields = {}, buttons = ['Okay', 'Cancel']) {
		return this.dialog('prompt', message, buttons, fields)
	}

	static dialog(type, message, buttons = [], promptValue) {
		return new Promise(resolve => {
			let overlay = $('<div>').addClass('overlay')
			let dialog = $('<div>')

			dialog.addClass('dialog').addClass(type)

			if (typeof promptValue === 'object') {
				$('<h3>').text(message).appendTo(dialog)
			} else {
				$('<p>').text(message).appendTo(dialog)
			}

			if (type === 'prompt') {
				if (typeof promptValue === 'object') {
					Object.keys(promptValue).forEach(key => {
						let label = promptValue[key].label
						let value = promptValue[key].value

						$('<input>').prop('type', 'text').prop('placeholder', label).data('key', key).val(value).appendTo(dialog)
					})
				} else {
					$('<input>').prop('type', 'text').val(promptValue).appendTo(dialog)

					dialog.wrapInner('<label>')
				}
			}

			let footer = $('<footer>')

			buttons.forEach((button, index) => {
				$('<button>').text(button).on('click', () => {
					if (index === 0) {
						if (type === 'prompt') {
							if (typeof promptValue === 'object') {
								let data = dialog.find('input').each((index, input) => {
									let key = $(input).data('key')
									let value = $(input).val().trim()

									promptValue[key].value = value
								})

								resolve(promptValue)
							} else {
								let data = dialog.find('input').val().trim()

								if (data.length > 0) {
									resolve(data)
								}
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
