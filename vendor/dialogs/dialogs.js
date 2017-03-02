'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
	return typeof obj;
} : function(obj) {
	return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _createClass = function() {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}
	return function(Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);
		if (staticProps) defineProperties(Constructor, staticProps);
		return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

var Dialog = function() {
	function Dialog() {
		_classCallCheck(this, Dialog);
	}

	_createClass(Dialog, null, [{
		key: 'alert',
		value: function alert(message) {
			return this.dialog('alert', message, ['Okay']);
		}
	}, {
		key: 'confirm',
		value: function confirm(message) {
			var buttons = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['Yes', 'No'];

			return this.dialog('confirm', message, buttons);
		}
	}, {
		key: 'prompt',
		value: function prompt(message, value) {
			var buttons = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['Okay', 'Cancel'];

			return this.dialog('prompt', message, buttons, value);
		}
	}, {
		key: 'multiPrompt',
		value: function multiPrompt(message) {
			var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var buttons = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['Okay', 'Cancel'];

			return this.dialog('prompt', message, buttons, fields);
		}
	}, {
		key: 'dialog',
		value: function dialog(type, message) {
			var buttons = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
			var promptValue = arguments[3];

			return new Promise(function(resolve) {
				var overlay = $('<div>').addClass('overlay');
				var dialog = $('<div>');

				dialog.addClass('dialog').addClass(type);

				if ((typeof promptValue === 'undefined' ? 'undefined' : _typeof(promptValue)) === 'object') {
					$('<h3>').text(message).appendTo(dialog);
				} else {
					$('<p>').text(message).appendTo(dialog);
				}

				if (type === 'prompt') {
					if ((typeof promptValue === 'undefined' ? 'undefined' : _typeof(promptValue)) === 'object') {
						Object.keys(promptValue).forEach(function(key) {
							var label = promptValue[key].label;
							var value = promptValue[key].value;

							$('<input>').prop('type', 'text').prop('placeholder', label).data('key', key).val(value).appendTo(dialog);
						});
					} else {
						$('<input>').prop('type', 'text').val(promptValue).appendTo(dialog);

						dialog.wrapInner('<label>');
					}
				}

				var footer = $('<footer>');

				buttons.forEach(function(button, index) {
					$('<button>').text(button).on('click', function() {
						if (index === 0) {
							if (type === 'prompt') {
								if ((typeof promptValue === 'undefined' ? 'undefined' : _typeof(promptValue)) === 'object') {
									var data = dialog.find('input').each(function(index, input) {
										var key = $(input).data('key');
										var value = $(input).val().trim();

										promptValue[key] = value;
									});

									resolve(promptValue);
								} else {
									var _data = dialog.find('input').val().trim();

									if (_data.length > 0) {
										resolve(_data);
									}
								}
							} else {
								resolve();
							}
						}

						overlay.addClass('hidden')

						setTimeout(function() {
							overlay.remove();
						}, 300);
					}).appendTo(footer);
				});

				dialog.append(footer);

				overlay.append(dialog).on('click', function(e) {
					if ($(e.target).hasClass('overlay')) {
						overlay.addClass('hidden')

						setTimeout(function() {
							overlay.remove();
						}, 300);
					}
				}).appendTo('body');

				if (type === 'prompt') {
					dialog.find('input').get(0).focus();
				}
			});
		}
	}]);

	return Dialog;
}();
