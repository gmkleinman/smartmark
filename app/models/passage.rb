class Passage < ApplicationRecord
    validates :title, :author, :body, presence: true

    has_many :annotations,
        foreign_key: :passage_id,
        class_name: :Annotation
end
