let initialState = {
  sortType: 'RATING',
  sortText: '',
  movies: [],
  moviesFiltered: [],
  loading: false,
  error: null
};


function movieApp(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_MOVIES_BEGIN':
      return {
        ...state,
        loadingFetch: true,
        error: null
      };
    case 'FETCH_MOVIES_SUCCESS':
      return {
        ...state,
        loadingFetch: false,
        movies: action.payload
      };
    case 'FETCH_MOVIES_ERROR':
      return {
        ...state,
        loadingFetch: false,
        error: action.payload,
        movies: []
      };
    case 'SEARCH_MOVIES':
      return {
        ...state,
        loadingSearch: true,
        moviesFiltered: state.movies.filter(movie => movie.title.toLowerCase().includes(action.text.toLowerCase())),
        error: null
      };
    case 'SET_RELEASE_DATE_SORT_TYPE':
      return {
        ...state,
        moviesFiltered: state.moviesFiltered.slice()
          .sort((movie1, movie2) => Date.parse(movie1.release_date) - Date.parse(movie2.release_date))
      };
    case 'SET_TITLE_SORT_TYPE':
      return {
        ...state,
        moviesFiltered: state.moviesFiltered.slice()
          .sort((movie1, movie2) => movie1.title !== movie2.title ? movie1.title < movie2.title ? -1 : 1 : 0)
      };
    default:
      return state;
  }
}

export default movieApp;
