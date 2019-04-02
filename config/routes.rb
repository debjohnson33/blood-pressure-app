Rails.application.routes.draw do
  
	root to: "welcome#home"

  namespace :api do
    
		post '/signup' => 'users#signup'
		post 'tokens' => 'tokens#create'
		get '/logout' => 'users#logout'
		post '/find_user' => 'users#find_user'
  	resources :users do
  		resources :measurements
  		resources :goals
  	end
  end
end
