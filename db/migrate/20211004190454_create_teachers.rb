class CreateTeachers < ActiveRecord::Migration[6.1]
  def change
    create_table :teachers do |t|
      t.string :name
      t.string :grade_level
      t.string :username
      t.string :password_digest
      t.string :image_link
      t.string :lesson_plan
      t.string :reminders
      t.string :additional_image1

      t.timestamps
    end
  end
end
