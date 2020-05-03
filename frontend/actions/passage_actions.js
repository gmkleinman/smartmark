import * as PassageApiUtil from '../util/passage_api_util';

export const RECEIVE_PASSAGES = 'RECEIVE_PASSAGES';
export const RECEIVE_PASSAGE = 'RECEIVE_PASSAGE';
export const REMOVE_PASSAGE = 'REMOVE_PASSAGE';

const receivePassages = passages => ({
    type: RECEIVE_PASSAGES,
    passages,
})

const receivePassage = passage => {
    return(
        {
        type: RECEIVE_PASSAGE,
        passage,
        }
    )
}

const removePassage = passageId => {
    return(
        {
        type: REMOVE_PASSAGE,
        passageId,
        }
    )
}

export const fetchPassages = () => dispatch => (
    PassageApiUtil.fetchPassages()
        .then((passages) => dispatch(receivePassages(passages)))
)

export const fetchPassage = passageId => dispatch => {
    return(
        PassageApiUtil.fetchPassage(passageId)
            .then(passage => dispatch(receivePassage(passage)))
    )
}

export const createPassage = passage => dispatch => (
    PassageApiUtil.createPassage(passage)
        .then((passage) => dispatch(recievePassage(passage)))
)

export const updatePassage = passage => dispatch => (
    PassageApiUtil.updatePassage(passage)
        .then((passage) => dispatch(recievePassage(passage)))
)

export const deletePassage = passage => dispatch => (
    PassageApiUtil.deletePassage(passage)
        .then((passage) => dispatch(removePassage(passage)))
)
