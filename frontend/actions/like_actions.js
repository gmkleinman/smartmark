import * as LikeApiUtil from '../util/like_api_util';

export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE ';
export const REMOVE_LIKES = 'REMOVE_LIKES';

const receiveLikes = likes => ({
    type: RECEIVE_LIKES,
    likes,
})

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like,
})

const removeLike = likeId => ({
    type: REMOVE_LIKES,
    likeId,
})

export const createLike = like => dispatch => (
    LikeApiUtil.createLike(like)
        .then(like => dispatch(receiveLike(like)))
)

export const deleteLike = likeId => dispatch => (
    LikeApiUtil.deleteLike(likeId)
        .then(() => dispatch(removeLike(likeId)))
)