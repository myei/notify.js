var Notify = function (options) {

	_this = this;

	this.name = 'Notify.js';

	this.options = {
		color: '#323232',
		position: 'right',
		rounded: false,
		content: null,
		callback: null,
		timeout: 4000
	};

	var build = function () {
		if (jQuery('.notify-js.notify-wraper').length)
			return;

		jQuery('head').append(`
							<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
							<style>
								.notify-js {
									font-family: 'Roboto', sans-serif;
									font-weight: 300;
									font-size: 14px;
								}
								.notify-js.notify-wraper {
									position: ` + (isMobile() ? 'fixed' : 'absolute') + `;
									width: ` + (isMobile() ? '100%' : '1px') + `;
									text-align: ` + (isMobile() ? 'center' : 'left') + `;
									bottom: ` + (isMobile() ? '0px' : 'inherit') + `;
									top: ` + (isMobile() ? 'inherit' : '5%') + `;
									left: ` + (isMobile() ? '0' : '') + `;
									height: auto;
									z-index: 9999999999;
								}
								.notify-js.notify-message-wraper {
									padding: 1rem;
									color: white;
									margin-top: ` + (isMobile() ? '10px' : '0') + `;
									margin-bottom: ` + (isMobile() ? '0' : '10px') + `;
									cursor: pointer;
									box-shadow: 0px 1px 3px rgba(0,0,0,0.2);
									min-width: ` + (isMobile() ? '100%' : 'auto') + `;
									white-space: ` + (isMobile() ? 'inherit' : 'nowrap') + `;
									position: relative;
								}
								.notify-js .notify-message {
									letter-spacing: 1px;
								}
								.notify-right {
									right: 5%;
								}
								.notify-left {
									left: 5%;
								}
						   </style>
						   <meta charset="UTF-8">
						   <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">`);


		jQuery('body').append('<div class="notify-js notify-wraper notify-' + (isMobile() ? 'mobile' : 'desktop notify-right') + '"></div>');
			if (!isMobile())
				jQuery('body').append('<div class="notify-js notify-wraper notify-' + (isMobile() ? 'mobile' : 'desktop notify-left') + '"></div>');
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

		build();
		message();
		behavior();
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

		jQuery('.notify-js.notify-wraper' + (!isMobile() ? '.notify-' + _this.options.position : ''))
			.append(`<span class="notify-js notify-message-wraper" id="` + _this.id + `" style="opacity: 0; 
																						  background: ` + _this.options.color + `; 
																						  float: ` + _this.options.position + `;
																						  border-radius: ` + (_this.options.rounded ? '25px': '0px') + `;
																						  margin-top: 20px;">
						<span class="notify-message" style="color: ` + fontColor + `">` + _this.options.content + `</span>
					</span>`);

		jQuery(_this._id).animate({opacity: 1, marginTop: '0px'}, 200);
	};

	var behavior = function () {
		jQuery(_this._id).draggable({ 
				axis: 'x', 
				scroll:false, 
				start: function() {
		        	$(this).animate({opacity: 0}, 100).fadeOut();
		        	window.clearTimeout(_this.timeout)
		      	},
		      	stop: _this.options.callback
	      	});
	};

	var close = function (target) {
		jQuery(target).animate({opacity: 0, marginTop: '-40px'}, 200, function () { jQuery(target).remove(); });
	};

	return init(options);

};