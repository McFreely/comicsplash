App.StoryRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('story', params.story_id)
	}
})