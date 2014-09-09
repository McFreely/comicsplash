App.StoriesNewRoute = Ember.Route.extend({
	authRedirectable: true,

	setupController: function(controller) {
		controller.set('fields', {});
	}
});