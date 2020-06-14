class Like < ApplicationRecord
    validates :annotation_id, :upvoter_id, presence: true
    validates :annotation_id, uniqueness: { scope: :upvoter_id,
        message: "can only be upvoted once per user" }
    
    belongs_to :annotation,
        foreign_key: :annotation_id,
        class_name: :Annotation

    belongs_to :liker,
        foreign_key: :upvoter_id,
        class_name: :User
    
    def self.likes_for_user_id(user_id)
        Like
            .joins(:users)
            .where('user_id = likes.upvoter_id')
    end
end