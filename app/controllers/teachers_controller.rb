class TeachersController < ApplicationController
    before_action :authorize, only: [:show]

    def create
      teacher = Teacher.create!(teacher_params)
      if teacher.valid?
      session[:teacher_id] = teacher.id
      render json: teacher, status: :created
      else 
        render json: { error: user.errors.full_messages }, status: :unprocessable_entity
    end
end
  
    def show
        teacher = Teacher.find_by(id: session[:teacher_id])
        render json: teacher, include: :students
    end
  
    private

    def authorize
        # puts "---------"
        # puts session 
        
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :teacher_id
      end
  
    def teacher_params
      params.permit(:username, :password, :password_confirmation, :name, :grade_level)
    end


end
