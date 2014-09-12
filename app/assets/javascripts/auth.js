App.Auth = Ember.Auth.extend({
	request: 'jquery',
	response: 'json',
	strategy: 'token',
	session: 'cookie',

	modules: ['emberData', "authRedirectable", "actionRedirectable", "rememberable"],

	signInEndPoint: '/api/v1/sign_in',
	signOutEndPoint: '/api/v1/sign_out',
	tokenKey: 'auth_token',
	tokenIdKey: 'user_id',
	tokenLocation: 'param',

	authRedirectable: {
		route: 'signIn'
	},

	emberData: {
		userModel: 'user'
	},

	rememberable: {
		tokenKey: 'remember_token',
		period: 7,
		autoRecall: true
	}
});
