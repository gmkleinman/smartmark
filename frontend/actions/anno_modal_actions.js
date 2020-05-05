export const OPEN_NEW_ANNOTATION = 'OPEN_NEW_ANNOTATION';
export const CLOSE_NEW_ANNOTATION = 'CLOSE_NEW_ANNOTATION';

export const openNewAnnotation = () => {
    // debugger
    return {
        type: OPEN_NEW_ANNOTATION,
        // passageId
    }
}

export const closeNewAnnotation = () => ({
    type: CLOSE_NEW_ANNOTATION,
})
