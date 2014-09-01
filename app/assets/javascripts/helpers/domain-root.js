Ember.Handlebars.registerBoundHelper('domainRoot', function(story) {
		var domain = story.get('link');
		var domain_parts =domain.split('/');
		return domain_parts[2];
});