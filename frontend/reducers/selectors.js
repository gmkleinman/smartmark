export const selectAnnotationsByPassageId = (state, passageId) => {
    let filtered_annotations = [];
    Object.values(state.entities.annotations).forEach(annotation => {
        if(annotation.passage_id === passageId) return filtered_annotations.push(annotation)
    });

    return filtered_annotations;

};

export const selectCommentsByPassageId = (state, passageId) => {
    let filtered_comments = [];
    Object.values(state.entities.comments).forEach(comment => {
        if(comment.passage_id === passageId) return filtered_comments.push(comment)
    });

    return filtered_comments;

};