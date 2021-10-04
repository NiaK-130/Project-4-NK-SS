class CreateErosters < ActiveRecord::Migration[6.1]
  def change
    create_table :erosters do |t|
      t.string :name
      t.timestamps
    end
  end
end
