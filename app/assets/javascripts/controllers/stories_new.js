App.StoriesNewController = Ember.Controller.extend({
	actions: {
		createStory: function() {
			var self = this;

			var story = this.store.createRecord('story', this.get('fields'));
			story.set('user', this.auth.get('user'));
			story.save().then(function() {
				self.transitionTo('stories');
			});
		}
	}
});