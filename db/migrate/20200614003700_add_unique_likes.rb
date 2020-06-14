class AddUniqueLikes < ActiveRecord::Migration[5.2]
  def change
    add_index :likes, [:annotation_id, :upvoter_id], unique: true
  end
end
