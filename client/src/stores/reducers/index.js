export default function reducers (state = { movies: [], page: 1 }, action) {
  switch(action.type){
    case 'FETCH_MOVIES':
      return {...state, movies : action.payload};
    default : 
      return state;
  }
}