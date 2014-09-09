source 'https://rubygems.org'

ruby '2.1.2'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.1.5'
# Use sqlite3 as the database for Active Record
gem 'sqlite3'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.3'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Bootstrap framework
gem 'bootstrap-sass'

# Use jquery as the JavaScript library
gem 'jquery-rails'

gem 'devise', '>=3.0', '<3.1'

gem 'ember-auth-rails'# client-side authentication
gem 'ember-auth-request-jquery-rails', '~> 1.0' # auth requests via jQuery.ajax
gem 'ember-auth-response-json-rails', '~> 1.0' # responses in json
gem 'ember-auth-strategy-token-rails', '~> 1.0' # token authentication
gem 'ember-auth-session-cookie-rails', '~> 1.0' # use cookies
gem 'ember-auth-module-ember_data-rails', '~> 1.0' # ember-data integration
gem 'ember-auth-module-auth_redirectable-rails', '~> 1.0'
gem 'ember-auth-module-action_redirectable-rails'
gem 'ember-auth-module-action_redirectable-source'
gem 'ember-auth-module-rememberable-rails', '~> 1.0'

# Ember related files
gem 'ember-rails'
gem 'ember-source'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0',          group: :doc

# Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
gem 'spring',        group: :development
gem 'pry-rails', group: :development
gem 'rb-readline'

gem 'ffaker'

gem 'momentjs-rails'
# Use unicorn as the app server
gem 'unicorn'

group :production do
  gem 'rails_12factor', '~> 0.0' # tweaks for heroku
  gem 'newrelic_rpm', '~> 3.5' # prevent heroku from idling
end
