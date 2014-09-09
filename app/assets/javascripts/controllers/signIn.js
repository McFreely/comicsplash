App.SignInController = Ember.Controller.extend({
	email: null,
	password: null,
	remember: false,

	actions: {
		signIn: function() {
			return this.get('auth').signIn({
				data: {
					email: this.get('email'),
					password: this.get('password'),
					remember: this.get('remember')
				}
			});
		}
	}
});