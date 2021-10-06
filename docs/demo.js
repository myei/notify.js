(function () {
	
	document.querySelector('#right').addEventListener('click', function() {
		Notify('Default notification');
	});

	document.querySelector('#random').addEventListener('click', function() {
		Notify({
			content: 'Random color...',
			color: 'random'
		});
	});

	document.querySelector('#left').addEventListener('click', function() {
		Notify({
			content: 'Left notification',
			position: 'left',
			color: 'red'
		});
	});

	document.querySelector('#rounded').addEventListener('click', function() {
		Notify({
			content: 'Rounded notification',
			rounded: 5,
			color: 'blue'
		});
	});

	document.querySelector('#callback').addEventListener('click', function() {
		Notify({
			content: 'Callback',
			color: 'random',
			callback: function () {
				alert('This is a callback');
			}
		});
	});

})();