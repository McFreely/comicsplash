App.StoriesController = Ember.ArrayController.extend({
	actions: {
		delete: function(story) {
			story.destroyRecord();
		}
	}
})