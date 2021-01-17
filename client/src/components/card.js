import { Link } from 'react-router-dom';

export default function card (props) {
  const { movie } = props;
  const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const releaseDate = (string) => {
    let date = new Date(string);
    let convertDate = date.toDateString();
    let newDate = convertDate.split(' ');
    return `${newDate[1]} ${newDate[2]}, ${newDate[3]}`;
  }

  const customTitle = (title) => {
    let newTitle = '';
    for(let i = 0; i < title.length; i++){
      if(title[i] != '%'){
        newTitle += title[i];
      }
    }
    let tempTitle = newTitle.split(' ');
    if(tempTitle.length > 1){
      return tempTitle.join('-');
    } else {
      return newTitle;
    }
  }

  return (
    <div className="card mb-2 shadow rounded" style={{ width : "17rem"}}>
      <Link to={`/${movie.id}-${customTitle(movie.title)}`}>
        <img src={imgUrl} className="card-img-top" alt="..." />
      </Link>
      <div className="card-body">
        <Link to={`/${movie.id}`} 
        className="text-dark" 
        style={{textDecoration : "none"}}
        >
          <h6 className="card-title fw-bold text-start mb-0">{movie.title}</h6>
        </Link>
        <p className="text-start fw-light">{releaseDate(movie.release_date)}</p>
      </div>
    </div>
  )
}