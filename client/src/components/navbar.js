import { NavLink } from 'react-router-dom';

export default function navbar () {
  return (
    <div className="navbar bg-info border shadow d-flex justify-content-center">
      <NavLink to="/" style={{textDecoration : "none"}}>
        <h2 className="text-light logoText">Rebel Movies</h2>
      </NavLink>
    </div>
  )
}

