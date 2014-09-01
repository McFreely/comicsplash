// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.resource('stories', {path: "/"}, function() {
  	this.route('new', {path: '/stories/submit'});
  });
  this.resource('story', {path: '/stories/:story_id'});
});

App.Router.reopen({
	location: 'auto',
	rootURL: '/'
});