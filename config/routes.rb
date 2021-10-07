Rails.application.routes.draw do

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  post "/signup", to: "teachers#create"
  get "/me", to: "teachers#show"

  resources :teachers
  resources :students, only: [:index, :show, :create, :destroy]

  
  # resources :teachers, only: [:show, :create]
end
