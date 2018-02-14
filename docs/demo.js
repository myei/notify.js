(function () {
	
	$('#right').click(function() {
		new Notify('Default notification');
	});

	$('#random').click(function() {
		new Notify({
			content: 'Random color...',
			color: 'random'
		});
	});

	$('#left').click(function() {
		new Notify({
			content: 'Left notification',
			position: 'left',
			color: 'red'
		});
	});

	$('#rounded').click(function() {
		new Notify({
			content: 'Rounded notification',
			rounded: true,
			color: 'blue'
		});
	});

	$('#callback').click(function() {
		new Notify({
			content: 'Callback',
			color: 'random',
			callback: function () {
				alert('This is a callback');
			}
		});
	});

})();