import './App.css';
import { Navbar, Card, MovieDetail } from './components';
import React, { useEffect } from 'react';
import { actionFetchMovie,  fetchMoreMovies } from './stores/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';

function App() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const page = useSelector((state) => state.page);

  useEffect(() => {
    dispatch(actionFetchMovie())
  }, [])

  const loadMoreFunction = () => {
    dispatch(fetchMoreMovies(page))
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container d-flex justify-content-between flex-wrap mt-2">
        <Switch>
          <Route exact path="/">
            <InfiniteScroll
              initialLoad={false}
              loadMore={loadMoreFunction}
              hasMore={true}
              loader={(
                <h1>loading heula.....</h1>
              )}
              className="d-flex justify-content-between flex-wrap"
            >
              { movies.map((el, i) => (
                <Card key={i} movie={el} />
              )) }
            </InfiniteScroll>
          </Route>
          <Route path="/:id">
            <MovieDetail />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
