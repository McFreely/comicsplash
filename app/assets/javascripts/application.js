// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require notify.min
//= require bootstrap-sprockets
//= require handlebars
//= require ember
//= require ember-data

//= require ember-auth
//= require ember-auth-request-jquery
//= require ember-auth-response-json
//= require ember-auth-strategy-token
//= require ember-auth-session-cookie
//= require ember-auth-module-ember-data
//= require ember-auth-module-auth-redirectable
//= require ember-auth-module-action-redirectable
//= require ember-auth-module-rememberable

//= require moment
//= require_self
//= require ./app

// for more details see: http://emberjs.com/guides/application/
App = Ember.Application.create({
	  LOG_TRANSITIONS: true, 

  // Extremely detailed logging, highlighting every internal
  // step made while transitioning into a route, including
  // `beforeModel`, `model`, and `afterModel` hooks, and
  // information about redirects and aborted transitions
  LOG_TRANSITIONS_INTERNAL: true
});

//= require_tree .
