export const fetchPassages = () => (
    $.ajax({
        url: '/api/passages',
        method: 'GET',
    })
)

export const createPassage = passage => (
    $.ajax({
        url: '/api/passages',
        method: 'POST',
        data: { passage },
    })
)

export const fetchPassage = passageId => (
    $.ajax({
        url: `/api/passages/${passageId}`,
        method: 'GET',
    })
)

export const updatePassage = passage => (
    $.ajax({
        url: `/api/passages/${passage.id}`,
        method: 'PATCH',
        data: { passage }
    })
)

export const deletePassage = passageId => (
    $.ajax({
        url: `/api/passages/${passageId}`,
        method: 'DELETE',
    })
)

