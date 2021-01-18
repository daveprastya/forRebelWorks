import { Link } from 'react-router-dom';

export default function similarCard (props) {
  const { sMovie } = props;

  const customTitle2 = (title) => {
    let tempTitle = title.split(' ');
    if(tempTitle.length > 1){
      return tempTitle.join('-');
    } else {
      return title;
    }
  }

  return (
    <div className="card" style={{width: '250px'}}>
      <Link to={`/${sMovie.id}-${customTitle2(sMovie.title)}`} style={{textDecoration: 'none'}}>
        <img src={`https://image.tmdb.org/t/p/w200${sMovie.backdrop_path}`} 
        className="card-img-top"
        />
        <div>
          <h6 className="text-dark">{sMovie.title}</h6>
        </div>
      </Link>
    </div>
  )
}