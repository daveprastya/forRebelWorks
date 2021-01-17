export default function GetMovieDetail (id) {
  return (dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5c7850e05a3db3bca90aeb2a017f73b6&language=en-US&append_to_response=similar`)
      .then((response) => {
        if(response.ok){
          return response.json();
        } else {
          return Promise.reject('Get Detail Failed!!!')
        }
      })
      .then((data) => {
        dispatch({ type: 'GET_MOVIE_DETAIL', payload : data });
      })
      .catch((err) => console.log(err))
  }
}