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
    setTimeout(()=>{
      dispatch(fetchMoreMovies(page))
    }, 2000)
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
                <div className="d-flex justify-content-center" style={{paddingLeft: '500px'}}>
                  <div className="css-spinner clickable" onclick="lda.css.show('facebook')">
                    <div className="lds-facebook">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div className="name"> <i className="i-html"></i>
                    </div>
                  </div>
                </div>
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
