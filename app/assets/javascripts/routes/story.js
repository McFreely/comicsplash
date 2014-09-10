App.StoryRoute = Ember.Route.extend({
	model: function(params) {
		console.log('heyooo!')
		console.log(this.store.find('story', params.story_id));
		return this.store.find('story', params.story_id);
	}
})