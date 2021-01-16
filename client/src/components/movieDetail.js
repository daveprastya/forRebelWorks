import { useLocation } from 'react-router-dom'

export default function MovieDetail () {
  const location = useLocation();
  const movie = location.customProps;
  // console.log(movie)

  return (
    <div className="d-flex">
      <div>photo</div>
      <div>isi</div>
    </div>
  )
}