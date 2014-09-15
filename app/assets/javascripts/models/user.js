App.User = DS.Model.extend({
	email: DS.attr('string'),
	username: DS.attr('string'),
	password: DS.attr('string'),
	stories: DS.hasMany('story', {async: true})
});
