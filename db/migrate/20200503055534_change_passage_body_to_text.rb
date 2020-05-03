class ChangePassageBodyToText < ActiveRecord::Migration[5.2]
  def change
    change_column :passages, :body, :text
  end
end
