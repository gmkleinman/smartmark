export const fetchLikes = () => (
    $.ajax({
        url: `/api/passages/:passageId/annotations/:annotationId/likes`,
        method: 'GET',
    })
)

export const createLike = like => (
    $.ajax({
        url: `/api/passages/:passageId/annotations/:annotationId/likes/`,
        method: 'POST',
        data: { like }
    })
)

export const deleteLike = likeId => (
    $.ajax({
        url: `/api/passages/:passageId/annotations/:annotationId/likes/${likeId}`,
        method: 'DELETE',
    })
)

