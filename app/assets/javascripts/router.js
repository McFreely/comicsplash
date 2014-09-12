// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.route('signIn', {path: 'login'});
  this.route('signOut');
  this.resource('stories', {path: "/"}, function() {
  	this.route('new', {path: '/stories/submit'});
  });
  this.resource('story', {path: '/stories/:story_id'});
  this.route('users.new', {path: '/register'})
});

App.Router.reopen({
	location: 'auto',
	rootURL: '/'
});
