class ChangeAnnotationBodyToString < ActiveRecord::Migration[5.2]
  def change
    change_column :passages, :body, :string
  end
end
