class StudentsController < ApplicationController
    def index
        students = Student.all
        render json: students
    end

    def show 
        student = Student.find_by(id: params[:id])
        render json: student
    end 

    def create
        student = Student.create(student_params)
        render json: student, status: :created
    end

    def update
        student = Student.find_by(id: params[:id])
        student.update(student_params)
        render json: student
      end

      def destroy
        student = Student.find_by(id: params[:id])
        if student
          student.destroy
          head :no_content
        else
          render json: {error: "student not found"}, status: :not_found
        end 
      end 


   private

   def student_params
    params.permit(:name, :image, :email, :home_address, :gpa, :reading_level, :writing_level, :math_level, :teacher_id)
   end


end