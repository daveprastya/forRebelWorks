export default function reducers (state = { movies: [], detail: {}, similar: [], page: 2 }, action) {
  switch(action.type){
    case 'FETCH_MOVIES':
      return {...state, movies : action.payload };
    case 'GET_MOVIE_DETAIL' :
      return {...state, detail : action.payload, similar : action.payload.similar.results};
    case 'FETCH_MORE':
      const newMovies = state.movies.concat(action.payload);
      const newPage = state.page + 1;
      return {...state, movies : newMovies, page : newPage};
    default : 
      return state;
  }
}