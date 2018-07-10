Rails.application.routes.draw do
  
	root to: "welcome#home"
  get '/users/current-user' => 'current_user#show'
  #get '/users/create'
	resources :users
  # post '/login' => 'sessions#create'
  mount Knock::Engine => "/knock"
  namespace :api do
    post 'user_token' => 'user_token#create'
    post '/users/create' => 'users#create'
  	resources :users do
  		resources :measurements
  		resources :goals
  	end
  end
end
