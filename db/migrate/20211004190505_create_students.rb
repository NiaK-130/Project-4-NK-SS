class CreateStudents < ActiveRecord::Migration[6.1]
  def change
    create_table :students do |t|
      t.string :name
      t.string :image
      t.string :email
      t.string :home_address
      t.string :gpa
      t.string :reading_level
      t.string :writing_level
      t.string :math_level
      t.integer :teacher_id

      t.timestamps
    end
  end
end



