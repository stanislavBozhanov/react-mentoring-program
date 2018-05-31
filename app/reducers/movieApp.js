let initialState = {
  sortType: 'RATING',
  sortText: '',
  movies: [],
  loading: false,
  error: null
};


function movieApp(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_MOVIES_BEGIN':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_MOVIES_SUCCESS':
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case 'FETCH_MOVIES_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
        movies: []
      };
    default:
      return state;
  }
}

export default movieApp;
