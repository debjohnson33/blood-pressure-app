Rails.application.routes.draw do
  
	root to: "welcome#home"

  namespace :api do
    
		post '/signup' => 'users#signup'
		post '/login' => 'tokens#login'
		get '/logout' => 'users#logout'
		# post '/find_user' => 'tokens#find_user'
  	resources :users do
  		resources :measurements
  		resources :goals
  	end
  end
end
