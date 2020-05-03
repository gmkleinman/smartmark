class AddNullToIndices < ActiveRecord::Migration[5.2]
  def change
    change_column_null :annotations, :start_idx, false
    change_column_null :annotations, :end_idx, false

    change_column_default :annotations, :start_idx, nil
    change_column_default :annotations, :end_idx, nil
  end
end
