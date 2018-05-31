import fetch from 'cross-fetch';

export const searchMovies = (text) => ({
  type: 'SEARCH_MOVIES',
  text
});

export function setReleaseDateSortType() {
  return {
    type: 'SET_RELEASE_DATE_SORT_TYPE',
  }
}

export function setTitleSortType() {
  return {
    type: 'SET_TITLE_SORT_TYPE',
  }
}

export function setSearchFilter(filter) {
  return {
    type: 'SET_SEARCH_FILTER',
    filter: filter
  }
}

export const fetchMoviesBegin = () => ({
  type: 'FETCH_MOVIES_BEGINS'
});

export const fetchMoviesSuccess = movies => ({
  type: 'FETCH_MOVIES_SUCCESS',
  payload: movies
});

export const fetchMoviesFailure = error => ({
  type: 'FETCH_MOVIES_FAILURE',
  payload: error
});

export const fetchMovies = () => dispatch => {
  dispatch(fetchMoviesBegin());
  return fetch('http://react-cdp-api.herokuapp.com/movies')
    .then(handleErrors)
    .then(response => response.json())
    .then(jsonResponse => dispatch(fetchMoviesSuccess(jsonResponse.data)))
    .catch(error => dispatch(fetchMoviesFailure(error)));
};

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
