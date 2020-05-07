export const OPEN_NEW_ANNOTATION = 'OPEN_NEW_ANNOTATION';
export const CLOSE_NEW_ANNOTATION = 'CLOSE_NEW_ANNOTATION';

export const openNewAnnotation = () => {
    return {
        type: OPEN_NEW_ANNOTATION,
    }
}

export const closeNewAnnotation = () => ({
    type: CLOSE_NEW_ANNOTATION,
})
