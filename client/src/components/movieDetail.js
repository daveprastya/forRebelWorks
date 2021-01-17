import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { movieDetail } from '../stores/actions';
import { SCard } from '../components';

export default function MovieDetail () {
  const { id } = useParams();
  const movie = useSelector((state) => state.detail);
  const similar = useSelector((state) => state.similar);
  const dispatch = useDispatch();

  const getYear = (params) => {
    let date = new Date(params);
    let year = date.getFullYear();
    return year;
  }

  useEffect(() => {
    let paramsId = id.split('-');
    dispatch(movieDetail(paramsId[0]));
  }, [id])

  console.log(movie, '<<<< detail ');
 
  return (
    <div>
      <div className="d-flex justify-content-between shadow">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="posterDetail" style={{width : '18rem'}} alt="..." />
        <div className="container text-start" style={{width : '100%'}}>
          <h1>{movie.title} ({getYear(movie.release_date)})</h1>
          <div>
            <h5>Overview</h5>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
      <h5 className="text-start mt-2">Similar Movie :</h5>
      <div className="similar overflow-auto" 
      style={{maxWidth: '1115px'}}
      >
        <div className="d-flex flex-row flex-wrap" style={{width: '5000px'}}>
          {
            movie && similar.map((el, i) => (
              <SCard key={i} sMovie={el} />
            ))
          }
        </div>
      </div>
    </div>
    
  )
}