import * as PassageApiUtil from '../util/passage_api_util'

export const RECEIVE_PASSAGES = 'RECEIVE_PASSAGES';
export const RECEIVE_PASSAGE = 'RECEIVE_PASSAGE';

export const receivePassages = passages => ({
    type: RECEIVE_PASSAGES,
    passages,
})

export const receivePassage = passage => ({
    type: RECEIVE_PASSAGE,
    passage,
})

export const fetchPassages = () => dispatch => (
    PassageApiUtil.fetchPassages()
        .then((passages) => dispatch(receivePassages(passages)))
)

export const fetchPassage = passage => dispatch => (
    PassageApiUtil.fetchPassage(passage)
        .then((passage) => dispatch(recievePassage(passage)))
)

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
        .then((passage) => dispatch(recievePassage(passage)))
)
