Ember.Handlebars.registerBoundHelper('timeFormat', function(story) {
	var time = story.get('created_at');
	return moment(time).fromNow();
});