export const selectAnnotationsByPassageId = (state, passageId) => {
    // debugger
    let filtered_annotations = [];
    Object.values(state.entities.annotations).forEach(annotation => {
        if(annotation.passage_id === passageId) return filtered_annotations.push(annotation)
    });

    return filtered_annotations;

};