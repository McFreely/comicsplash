// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.resource('stories', {path: "/"});
});

App.Router.reopen({
	location: 'auto',
	rootURL: '/'
});