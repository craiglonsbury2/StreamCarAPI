

var ractive = new Ractive({
	target: '#target',
	template: '#template'
});

var listener = ractive.on({
	activate: function () {
		alert( 'Activating!');
	},
	deactivate: function () {
		alert( 'Deactivating!');
	},
	stop: function () {
		alert( 'No more alerts!' );
		listener.cancel();
	}
});

ractive.on({
	toggle: function () {
		if ( listener.isSilenced() ) {
			listener.resume();
			this.set( 'silenced', false );
		} else {
			listener.silence();
			this.set( 'silenced', true );
		}
	}
});
