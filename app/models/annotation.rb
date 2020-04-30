class Annotation < ApplicationRecord
    validates :body, :upvote_count, :passage_id, :annotator_id, presence: true
    
    belongs_to :passage,
        foreign_key: :passage_id,
        class_name: :Passage

    belongs_to :annotator,
        foreign_key: :annotator_id,
        class_name: :User
    
    def self.annotations_for_user_id(user_id)
        Artwork
            .joins(:users)
            .where('user_id = passages.annotator_id')
    end
end
