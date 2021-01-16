export default function fetchMovies () {
  return (dispatch) => {
    // fetch('https://api.themoviedb.org/3/movie/now_playing', {
    //   method : 'GET',
    //   body  : {
    //     api_key : '5c7850e05a3db3bca90aeb2a017f73b6',
    //     page : 1,
    //     language : 'en-US'
    //   }
    // })
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=5c7850e05a3db3bca90aeb2a017f73b6&language=en-US&page=1')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject('Fetch failed!!!');
        }
      })
      .then((data) => {
        dispatch( { type: 'FETCH_MOVIES', payload : data.results } )
      })
  }
}