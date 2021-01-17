export default function fetchMoreMovies (page) {
  return (dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=5c7850e05a3db3bca90aeb2a017f73b6&language=en-US&page=${page}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject('Fetch failed!!!');
        }
      })
      .then((data) => {
        dispatch( { type: 'FETCH_MORE', payload : data.results } )
      })
      .catch((err) => console.log(err))
  }
}