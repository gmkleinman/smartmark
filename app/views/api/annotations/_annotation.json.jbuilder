json.extract! annotation, :id, :body, :annotator_id, :passage_id, :upvote_count, :start_idx, :end_idx
# json.likes do 
#     annotation.likes.each do |like|
#         json.set! like.id do
#             json.id like.id
#             json.liker_id like.liker_id
#         end
#     end
# end