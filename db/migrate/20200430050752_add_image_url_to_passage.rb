class AddImageUrlToPassage < ActiveRecord::Migration[5.2]
  def change
    add_column :passages, :image_url, :string
  end
end
