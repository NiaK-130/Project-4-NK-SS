Rails.application.routes.draw do
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  post "/signup", to: "teachers#create"
  get "/me", to: "teachers#show"

end
