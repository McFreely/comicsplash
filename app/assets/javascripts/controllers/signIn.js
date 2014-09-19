App.SignInController = Ember.Controller.extend({
	email: null,
	password: null,
	remember: true,

	actions: {
		error: function(error, transition) {
			console.log(error);
			if (error.status === 401) {
				console/log('captured');
			}
		},
		signIn: function() {
			var self = this;
			return this.get('auth').signIn({
				data: {
					email: this.get('email'),
					password: this.get('password'),
					remember: this.get('remember')
				}
			}).then(function() {
		 			self.transitionToRoute('stories');
		 			$.notify('Welcome Back !', 'success', { position:"middle" });
		 		});		
		}
	}
});
