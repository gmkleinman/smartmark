export const OPEN_SHOW_ANNOTATION = 'OPEN_SHOW_ANNOTATION';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openShowAnnotation = passageId => {
    // debugger
    return {
        type: OPEN_SHOW_ANNOTATION,
        passageId
    }
}

export const closeModal = () => ({
    type: CLOSE_MODAL,
})
