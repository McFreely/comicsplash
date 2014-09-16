App.SignInController = Ember.Controller.extend({
	email: null,
	password: null,
	remember: false,

	actions: {
		signIn: function() {
			var self = this;
			return this.get('auth').signIn({
				data: {
					email: this.get('email'),
					password: this.get('password'),
					remember: this.get('remember')
				}
			}).then(fulfill, reject);

 	 		function fulfill() {
 	 			self.transitionToRoute('stories');
 	 			$.notify('Welcome Back !', 'success', { position:"middle" });
 	 		};
 	 		function reject() {
 	 			$('.btn-notify').notify('wrong email or password',{ position:"right middle" });
 	 		};
		}
	}
});
