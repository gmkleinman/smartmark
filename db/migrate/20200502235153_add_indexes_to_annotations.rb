class AddIndexesToAnnotations < ActiveRecord::Migration[5.2]
  def change
    add_column :annotations, :start_idx, :integer, :default => 0
    add_column :annotations, :end_idx, :integer, :default => 0
  end
end
