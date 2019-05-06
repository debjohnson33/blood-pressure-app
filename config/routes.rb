Rails.application.routes.draw do

  namespace :api do
		
		resources :users, :measurements, :goals
		post '/signup' => 'users#signup'
		post 'user_token' => 'user_token#create'
		get '/logout' => 'users#logout'
		post '/find_user' => 'users#find_user'
  	
  end
end
