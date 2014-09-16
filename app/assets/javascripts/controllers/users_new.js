App.UsersNewController = Ember.ArrayController.extend({
	actions: {
		register: function() {
			var self = this;
			var email = this.get('email');
			var username = this.get('username');
			var password = this.get('password');

			var user = this.store.createRecord('user', {
				email: email,
				username: username,
				password: password
			});
			user.save().then(function(){
  				self.transitionToRoute('signIn');
  				$.notify('Registration was succesful, you can now login!', 'success');
			}, function(response) {
				self.set('errors', response.errors);	
			});
		}
	}
});
