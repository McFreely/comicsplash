Rails.application.routes.draw do
	namespace :api do
		namespace :v1 do
			devise_for :users, only: []
			devise_scope :user do
				post 'sign_in' => "sessions#create"
				delete 'sign_out' => "sessions#destroy"
			end
			resources :stories
			resources :users, only: [:index, :show]
		end
	end
	root to: "home#index"
	get '*ember', to: "home#index"
end
