App.SignOutController = Ember.Controller.extend({
	actions: {
		signOut: function() {
			var self = this;
			return this.auth.signOut().then(function() {
				self.transitionToRoute('stories');
				window.location.reload = true;
			});
		}
	}
});