const indexMovieContainer = document.querySelector('#index-movie-container')
const messageContainer = document.querySelector('#message-container')
const showMovieContainer = document.querySelector('#show-movie-container')

export const onIndexMovieSuccess = (movies) => {
    movies.forEach(movie => {
        const div = document.createElement('div')
        div.innerHTML = `
            <h3>${movie.title}</h3>
            <button data-id="${movie._id}" >Show Movie</button>
        `

        indexMovieContainer.appendChild(div)
    })
}

export const onMovieFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>You've got an error.</h3>
        <p>${error}</p>
    `
}

export const onCreateMovieSuccess = () => {
    messageContainer.innerText = 'You have added a movie!'
}

export const onShowMovieSuccess = (movie) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <h3>${movie.title}</h3>
        <p>${movie.director}</p>
        <p>${movie.year}</p>
        <p>${movie.genre}</p>
        <p>${movie._id}</p>

        <form data-id="${movie._id}">
            <input type="text" name="title" value="${movie.title}" />
            <input type="text" name="director" value="${movie.director}" />
            <input type="number" name="year" value="${movie.year}" />
            <input type="text" name="genre" value="${movie.genre}" />
            <input type="submit" value="Update Movie" />
        </form>

        <button data-id="${movie._id}">Delete Movie</button>
    `
    showMovieContainer.appendChild(div)
}

export const onUpdateMovieSuccess = () => {
    messageContainer.innerText = 'Update was successful.'
}

export const onDeleteMovieSuccess = () => {
    messageContainer.innerText = 'Delete was successful.'
}

// COMMENT

const indexCommentContainer = document.querySelector('#index-comment-container')
const commentMessageontainer = document.querySelector('#comment-message-container')
const showCommentContainer = document.querySelector('#show-comment-container')

export const onIndexCommentSuccess = (comments) => {
    comments.forEach(comment => {
        const div = document.createElement('div')
        div.innerHTML = `
            <h3>${comments.name}</h3>
            <button data-id="${comment._id}" >Show Comment</button>
        `

        indexCommentContainer.appendChild(div)
    })
}

export const onCommentFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>You've got an error.</h3>
        <p>${error}</p>
    `
}

export const onCreateCommentSuccess = () => {
    messageContainer.innerText = 'You have made a comment.'
}

export const onShowCommentSuccess = (comment) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <h3>${comment.name}</h3>

        <form data-id="${comment._id}">
            <input type="text" name="name" value="${comment.name}" />
            <input type="submit" value="Update Comment" />
        </form>

        <button data-id="${comment._id}">Delete Comment</button>
    `
    showCommentContainer.appendChild(div)
}

export const onUpdateCommentSuccess = () => {
    messageComment.innerText = 'Update was successful.'
}

export const onDeleteCommentSuccess = () => {
    messageContainer.innerText = 'Delete was successful.'
}