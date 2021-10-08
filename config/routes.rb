Rails.application.routes.draw do

  namespace :api do 

    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    
    post "/signup", to: "teachers#create"
    get "/me", to: "teachers#show"

    resources :teachers
    resources :students, only: [:index, :show, :create, :destroy]
  end

  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
