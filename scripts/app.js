import { 
	indexMovies, 
	indexComments,
	createMovie,
	createComment,
	showMovie,
	showComment,
	updateMovie,
	updateComment,
	deleteMovie,
	deleteComment,
} from './api.js'


import { 
	onIndexMovieSuccess,
	onIndexCommentSuccess,
	onMovieFailure,
	onCommentFailure,
	onCreateMovieSuccess,
	onCreateCommentSuccess,
	onShowMovieSuccess, 
	onShowCommentSuccess,
	onUpdateMovieSuccess,
	onUpdateCommentSuccess,
	onDeleteMovieSuccess,
	onDeleteCommentSuccess
} from './ui.js'

const createMovieForm = document.querySelector('#create-movie-form')
const indexMovieContainer = document.querySelector('#index-movie-container')
const showMovieContainer = document.querySelector('#show-movie-container')


// MOVIES

indexMovies()
    .then(res => res.json())
    .then(res => {
        console.log(res)
        onIndexMovieSuccess(res.movies)
    })
    .catch(onMovieFailure)


createMovieForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const movieData = {
			movie: {
				firstName: event.target['firstName'].value,
				lastName: event.target['lastName'].value,
				class: event.target['class'].value,
				strength: event.target['strength'].value,
			},
		}
    createMovie(movieData)
			.then(onCreateMovieSuccess)
			.catch(onMovieFailure)
})

indexMovieContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')

    if (!id) return

    showMovie(id)
			.then((res) => res.json())
			.then((res) => onShowMovieSuccess(res.movie))
			.catch(onMovieFailure)
})

showMovieContainer.addEventListener('submit', (event) => {
	event.preventDefault()

	const id = event.target.getAttribute('data-id')

	const movieData = {
		movie: {
			firstName: event.target['firstName'].value,
			lastName: event.target['lastName'].value,
			class: event.target['class'].value,
			strength: event.target['strength'].value,
		},
	}

    if (!id) return

	updateMovie(movieData, id)
		.then(onUpdateMovieSuccess)
		.catch(onMovieFailure)
})

showMovieContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

    if (!id) return

	deleteMovie(id)
		.then(onDeleteMovieSuccess)
		.catch(onMovieFailure)
})


// COMMENT

const createCommentForm = document.querySelector('#create-comment-form')
const indexCommentContainer = document.querySelector('#index-comment-container')
const showCommentContainer = document.querySelector('#show-comment-container')

indexComments()
    .then(res => res.json())
    .then(res => {
        console.log(res)
        onIndexCommentSuccess(res.comments)
    })
    .catch(onCommentFailure)


createCommentForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const commentData = {
			comment: {
				name: event.target['name'].value,
			},
		}
    createComment(commentData)
			.then(onCreateCommentSuccess)
			.catch(onCommentFailure)
})

indexCommentContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')

    if (!id) return

    showComment(id)
			.then((res) => res.json())
			.then((res) => onShowCommentSuccess(res.comment))
			.catch(onCommentFailure)
})

showCommentContainer.addEventListener('submit', (event) => {
	event.preventDefault()

	const id = event.target.getAttribute('data-id')

	const commentData = {
		comment: {
			name: event.target['name'].value,
		},
	}

    if (!id) return

	updateComment(commentData, id)
		.then(onUpdateCommentSuccess)
		.catch(onCommentFailure)
})

showCommentContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

    if (!id) return

	deleteComment(id)
		.then(onDeleteCommentSuccess)
		.catch(onCommentFailure)
})