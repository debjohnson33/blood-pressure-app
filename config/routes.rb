Rails.application.routes.draw do

  namespace :api do
    
		post '/signup' => 'users#signup'
		post 'user_token' => 'user_token#create'
		get '/logout' => 'users#logout'
		post '/find_user' => 'users#find_user'
  	resources :users do
  		resources :measurements
  		resources :goals
  	end
  end
end
