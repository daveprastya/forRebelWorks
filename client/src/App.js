import './App.css';
import { Navbar, Card, MovieDetail } from './components';
import React, { useEffect } from 'react';
import { actionFetchMovie } from './stores/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(actionFetchMovie())
  }, [])

  return (
    <div className="App">
      <Navbar />
      <div className="container d-flex justify-content-between flex-wrap mt-2">
        <Switch>
          <Route exact path="/">
            { movies.map((el, i) => (
              <Card key={i} movie={el} />
            )) }
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
