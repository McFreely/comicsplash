// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.resource('stories', {path: "/"});
  this.resource('story', {path: '/stories/:story_id'});
});

App.Router.reopen({
	location: 'auto',
	rootURL: '/'
});