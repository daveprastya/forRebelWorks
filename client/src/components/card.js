export default function card (props) {
  const { movie } = props;
  let imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <div className="card mb-2 shadow" style={{ width : "17rem"}}>
      <img src={imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{movie.original_title}</h5>
      </div>
    </div>
  )
}