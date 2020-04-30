class ChangePassage2 < ActiveRecord::Migration[5.2]
  def change
    drop_table :passages
    create_table :passages do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.string :body, array: true, default: [], null: false
      t.timestamps
    end
  end
end
