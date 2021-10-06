var Notify = function (options) {

	_this = this;

	this.name = 'Notify.js';

	this.options = {
		color: '#323232',
		position: 'right',
		rounded: 0,
		content: null,
		callback: null,
		speedAnimations: 200,
		timeout: 4000
	};

	var build = function () {
		if (document.querySelectorAll('.notify-js.notify-wraper').length)
			return;

		document.querySelector('head').insertAdjacentHTML('beforeend', '<style> .notify-js { font-family: "Roboto", sans-serif; font-weight: 300; font-size: 14px; } .notify-js.notify-wraper { position: fixed; width: ' + (isMobile() ? '100%' : '1px') + '; text-align: ' + (isMobile() ? 'center' : 'left') + '; bottom: 0px; top: ' + (isMobile() ? 'inherit' : '5%') + '; left: ' + (isMobile() ? '0' : '') + '; height: auto; z-index: 9999999999; } .notify-js.notify-message-wraper { padding: 1rem; color: white; margin-top: ' + (isMobile() ? '10px' : '10px') + '; margin-bottom: ' + (isMobile() ? '0' : '10px') + '; cursor: pointer; box-shadow: 0px 1px 3px rgba(0,0,0,0.2); min-width: ' + (isMobile() ? '100%' : 'auto') + '; white-space: ' + (isMobile() ? 'inherit' : 'nowrap') + '; position: relative; } .notify-js .notify-message { letter-spacing: 1px; } .notify-right { right: 5%; } .notify-left { left: 5%; } </style> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">');


		document.querySelector('body').insertAdjacentHTML('afterbegin','<div class="notify-js notify-wraper notify-' + (isMobile() ? 'mobile' : 'desktop notify-right') + '"></div>');
		
		if (!isMobile())
			document.querySelector('body').insertAdjacentHTML('afterbegin','<div class="notify-js notify-wraper notify-' + (isMobile() ? 'mobile' : 'desktop notify-left') + '"></div>');
	};


	var init = function (options) {
		if (typeof options === 'string')
			_this.options.content = options;
		else if (typeof options === 'object')
			_this.options = Object.assign(_this.options, options);
		else
			console.error(_this.name + ': Argument error, string or object are accepted.');

		_this.id = 'notify-js-' + Math.round(Math.random() * (99999 - 10) + 10);
		_this._id = '#' + _this.id;

		_this.dir = !isMobile() ? 'bottom': 'top';

		build();
		message();
	};

	var isMobile = function () {
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
 			return true;
 		return false;
	};

	var message = function () {
		if (!_this.options.content || !_this.options.content.length) {
			console.error(_this.name + ': options.content can\'t be empty');
			return;
		}

		_this.options.color = _this.options.color.toLowerCase() === 'random' ? tinycolor.random() : _this.options.color;
		var fontColor = tinycolor(_this.options.color).isDark() ? '#fff' : 'black';
		
		document.querySelector('.notify-js.notify-wraper' + (!isMobile() ? '.notify-' + _this.options.position : ''))
			.insertAdjacentHTML('beforeend', `<span class="notify-js notify-message-wraper" id="` + _this.id + `" style="opacity:0; background: ` + _this.options.color + `; float: ` + _this.options.position + `; border-radius: ` + (!!_this.options.rounded ? _this.options.rounded+'px': '0px') + `; ` + _this.dir + `: ` + (isMobile() ? '0' : '20px') + `;" > <span class="notify-message" style="color: ` + fontColor + `">` + _this.options.content + `</span> </span>`);
		
		show();
		autoDestroy(_this._id, _this.options.timeout, _this.options.callback);
	};

	var show = function () {
		var options = {opacity: [0, 1]}, args = {duration: _this.options.speedAnimations, easing: 'ease-in'};
			options[_this.dir] = ['-20px', '0px'];
		
		document.querySelector(_this._id).animate(options, args);
		document.querySelector(_this._id).style.opacity = 1;
	};

	var destroy = function (target, callback) {
		new Promise(function (resolve) {
			document.querySelector(target).animate({opacity: [1, 0], top: ['-40px']}, {
				duration: _this.options.speedAnimations,
				easing: 'ease-in-out'
			});

			setTimeout( function() { resolve(target); }, _this.options.speedAnimations);
		}).then(function (e) {
			document.querySelector(e).remove(); 
			if (callback) callback();
		});
	};

	var autoDestroy = function (target, moment, callback) {
		_this.after = setTimeout(function() {
			destroy(target, callback);
		}, moment);
	};

	return init(options);

};