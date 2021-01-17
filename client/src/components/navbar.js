import { NavLink } from 'react-router-dom';
import myLogo from '../media/-RebelMovies-.png';

export default function navbar () {
  return (
    <div className="navbar bg-info border shadow d-flex justify-content-center">
      <NavLink to="/" style={{textDecoration : "none"}}>
        <h2 className="text-light logoText">Rebel Movies</h2>
        {/* <img src={myLogo} style={{height: '90px'}} /> */}
      </NavLink>
    </div>
  )
}

