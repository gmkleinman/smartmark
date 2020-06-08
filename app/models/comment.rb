class Comment < ApplicationRecord
    validates :body, :passage_id, :commenter_id, presence: true
    
    belongs_to :passage,
        foreign_key: :passage_id,
        class_name: :Passage

    belongs_to :commenter,
        foreign_key: :commenter_id,
        class_name: :User
    
    def self.annotations_for_user_id(user_id)
        Passage
            .joins(:users)
            .where('user_id = passages.commenter_id')
    end
end
