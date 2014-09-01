App.StoriesNewController = Ember.Controller.extend({
	actions: {
		createStory: function() {
			var self = this;
			var fields = this.get('fields');

			var story = this.store.createRecord('story', this.get('fields'));
			story.save().then(function() {
				self.transitionToRoute('story', story);
			});
		}
	}
});