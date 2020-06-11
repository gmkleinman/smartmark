class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :annotation_id, null: false
      t.integer :upvoter_id, null: false
      t.timestamps
    end
    add_index :likes, :annotation_id
    add_index :likes, :upvoter_id
  end
end
