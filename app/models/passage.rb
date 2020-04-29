class Passage < ApplicationRecord
    validates :title, :author, :body, presence: true
end
