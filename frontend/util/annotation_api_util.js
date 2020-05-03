export const fetchAnnotations = () => (
    $.ajax({
        url: `/api/passages/:passageId/annotations/`,
        method: 'GET',
    })
)

export const fetchAnnotation = annotationId => (
    $.ajax({
        url: `/api/passages/:passageId/annotations/${annotationId}`,
        method: 'GET',
    })
)

export const createAnnotation = annotation => (
    $.ajax({
        url: `/api/passages/:passageId/annotations/`,
        method: 'POST',
        data: { annotation }
    })
)

export const updateAnnotation = annotation => (
    $.ajax({
        url: `/api/passages/:passageId/annotations/${annotation.id}`,
        method: 'PATCH',
        data: { annotation }
    })
)

export const deleteAnnotation = annotationId => (
    $.ajax({
        url: `/api/passages/:passageId/annotations/${annotationId}`,
        method: 'DELETE',
    })
)

