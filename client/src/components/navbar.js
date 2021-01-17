import { NavLink } from 'react-router-dom';

export default function navbar () {
  return (
    <div className="navbar bg-info shadow text-light d-flex justify-content-center">
      <NavLink to="/" style={{textDecoration : "none"}}>
        <h2 className="text-light">My Movies Apps</h2>
      </NavLink>
    </div>
  )
}

