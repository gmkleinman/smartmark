class Like < ApplicationRecord
    validates :annotation_id, :liker_id, presence: true
    
    belongs_to :annotation,
        foreign_key: :annotation_id,
        class_name: :Annotation

    belongs_to :liker,
        foreign_key: :liker_id,
        class_name: :User
    
    def self.upvotes_for_user_id(user_id)
        Passage
            .joins(:users)
            .where('user_id = passages.liker_id')
    end
end
