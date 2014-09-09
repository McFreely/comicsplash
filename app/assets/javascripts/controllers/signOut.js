App.SignOutController = Ember.Controller.extend({
	actions: {
		signOut: function() {
			return this.auth.signOut().then(function() {
				window.location.reload = true;
			});
		}
	}
});