// MOVIES

export const indexMovie = () => {
    return fetch(`http://localhost:9000/movies`)
}

export const createMovie = (data) => {
    return fetch(`http://localhost:9000/movies`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showMovie = (id) => {
    return fetch(`http://localhost:9000/movies/${id}`)
}

export const updateMovie = (data, id) => {
    return fetch(`http://localhost:9000/movies/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const deleteMovie = (id) => {
    return fetch(`http://localhost:9000/movies/${id}`, {
        method: 'DELETE'
    })
}

// COMMENTS
export const indexComment = () => {
    return fetch(`http://localhost:9000/comments`)
}

export const createComment = (data) => {
    return fetch(`http://localhost:9000/comments`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showComment = (id) => {
    return fetch(`http://localhost:9000/comments/${id}`)
}

export const updateComment = (data, id) => {
    return fetch(`http://localhost:9000/comments/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const deleteComment = (id) => {
    return fetch(`http://localhost:9000/comments/${id}`, {
        method: 'DELETE'
    })
}