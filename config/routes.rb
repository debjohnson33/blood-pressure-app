Rails.application.routes.draw do
  
	root to: "welcome#home"

  #get '/users/create'
	resources :users

 # mount Knock::Engine => "/knock"
  namespace :api do
    resources :tokens, only: [:create]
    post '/users/create' => 'users#create'
  	resources :users do
  		resources :measurements
  		resources :goals
  	end
  end
end
