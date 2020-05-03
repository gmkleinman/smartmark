class CreateAnnotations < ActiveRecord::Migration[5.2]
  def change
    create_table :annotations do |t|
      t.text :body, null: false
      t.integer :upvote_count, null: false
      t.integer :passage_id, null: false
      t.integer :annotator_id, null: false
      t.timestamps
    end
    add_index :annotations, :passage_id
    add_index :annotations, :annotator_id
  end
end

