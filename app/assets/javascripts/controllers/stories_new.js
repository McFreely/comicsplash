App.StoriesNewController = Ember.Controller.extend({
	actions: {
		createStory: function() {
			var self = this;
			var story = this.store.createRecord('story', this.get('fields'));
			story.save().then(function() {
				self.transitionToRoute('story', story);
			});
		}
	}
});