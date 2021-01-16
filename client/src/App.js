import './App.css';
import { Navbar, Card } from './components';
import React, { useEffect } from 'react';
import { actionFetchMovie } from './stores/actions';
import { useDispatch, useSelector } from 'react-redux';

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
        { movies.map((el, i) => (
          <Card key={i} movie={el} />
        )) }
      </div>
    </div>
  );
}

export default App;
