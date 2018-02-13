var Notify = function (options) {

	_this = this;

	this.name = 'Notify.js';

	this.options = {
		color: 'red',
		position: 'left',
		content: null,
		callback: null
	};

	var build = function () {
		if (jQuery('.notify-js.notify-wraper').length)
			return;

		jQuery('head').append(`<style>
								.notify-js.notify-wraper {
									position: ` + (isMobile() ? 'fixed' : 'absolute') + `;
									width: ` + (isMobile() ? '100%' : '250px') + `;
									text-align: ` + (isMobile() ? 'center' : 'left') + `;
									bottom: ` + (isMobile() ? '0px' : 'inherit') + `;
									top: ` + (isMobile() ? 'inherit' : '0px') + `;
									left: ` + (isMobile() ? '0px' : '') + `;
									height: auto;
									z-index: 9999999999;
								}
								.notify-js.notify-message-wraper {
									padding: 1em;
									color: white;
									margin-top: 10px;
									margin-left: 0px;
									cursor: pointer;
									box-shadow: 1px 2px 13px #ccc;
									border-radius: ` + (isMobile() ? '0px' : '5px') + `;
									min-width: ` + (isMobile() ? '100%' : '200px') + `;
									white-space: ` + (isMobile() ? 'inherit' : 'nowrap') + `;
								}
								.notify-js .notify-message {
									letter-spacing: 1px;
								}
								.notify-right {
									right: 20px;
								}
								.notify-left {
									left: 20px;
								}
						   </style>
						   <meta charset="UTF-8">
						   <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">`);


		jQuery('body').append('<div class="notify-js notify-wraper notify-' + (isMobile() ? 'mobile' : 'desktop notify-right') + '"></div>');
			if (!isMobile())
				jQuery('body').append('<div class="notify-js notify-wraper notify-' + (isMobile() ? 'mobile' : 'desktop notify-left') + '"></div>');

		behavior();
	};


	var init = function (options) {
		if (typeof options === 'string')
			_this.options.content = options;
		else if (typeof options === 'object')
			_this.options = Object.assign(_this.options, options);
		else
			console.error(_this.name + ': Argument error, string or object are accepted.');

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

		var color = tinycolor(_this.options.color).isDark() ? 'white' : 'black';
		jQuery('.notify-js.notify-wraper' + (!isMobile() ? '.notify-' + _this.options.position : ''))
			.append(`<span class="notify-js notify-message-wraper" style="display:none; background: ` + _this.options.color + `; float: ` + _this.options.position + `">
						<span class="notify-message" style="color: ` + color + `">` + _this.options.content + `</span>
					</span>`);

		jQuery('.notify-js.notify-wraper').each(function () {
			$(this).children().last().fadeIn();
		});
	};

	var behavior = function () {
		jQuery('body').delegate('.notify-js.notify-message-wraper', 'click', function() {
			if (_this.options.callback){
				_this.options.callback();
			}

			var orientation = $(this).css('float') === 'right' ? {marginRight: '-100%', opacity: '0'} : {marginLeft: '-100%', opacity: '0'};
			$(this).animate(orientation, 300, function () {
				$(this).remove();
			});
		});
	};

	return init(options);

};