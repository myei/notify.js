(function () {
	
	$('#right').click(function() {
		new Notify('Default notification');
		new Notify({
			content: 'Default notifi',
			color: 'random'
		});
		new Notify({
			content: 'Default notification...',
			color: 'random'
		});
		new Notify({
			content: 'Default eroiwmfgioergjiore',
			color: 'random',
			callback: hey
		});
		new Notify({
			content: 'Default ',
			color: 'random'
		});
	});

	$('#left').click(function() {
		new Notify({
			content: 'Left notification',
			position: 'left'
		});
	});

	$('#rounded').click(function() {
		new Notify({
			content: 'Left notification',
			rounded: true
		});
	});

})();

function hey() {
	console.log('hola')
}