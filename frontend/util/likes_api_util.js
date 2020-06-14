export const createLike = like => (
    $.ajax({
        url: `/api/passages/:passageId/likes/`,
        method: 'POST',
        data: { like }
    })
)

export const deleteLike = likeId => (
    $.ajax({
        url: `/api/passages/:passageId/likes/${likeId}`,
        method: 'DELETE',
    })
)

