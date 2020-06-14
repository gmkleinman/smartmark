export const fetchComments = () => (
    $.ajax({
        url: `/api/passages/:passageId/comments/`,
        method: 'GET',
    })
)

export const fetchComment = commentId => (
    $.ajax({
        url: `/api/passages/:passageId/comments/${commentId}`,
        method: 'GET',
    })
)

export const createComment = comment => (
    $.ajax({
        url: `/api/passages/:passageId/comments/`,
        method: 'POST',
        data: { comment }
    })
)

export const updateComment = comment => (
    $.ajax({
        url: `/api/passages/:passageId/comments/${comment.id}`,
        method: 'PATCH',
        data: { comment }
    })
)

export const deleteComment = commentId => (
    $.ajax({
        url: `/api/passages/:passageId/comments/${commentId}`,
        method: 'DELETE',
    })
)

