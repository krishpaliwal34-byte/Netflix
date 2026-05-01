import React, { useState } from 'react'
import './Navbar.css'
import { useNavigate, Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [Openmenu, setOpenmenu] = useState(false)
  const location = useLocation()
  const navigate = useNavigate();

  return (
    <nav>
      <div className="navbar">
        <div className="logo"></div>

        {(location.pathname === '/movies' || location.pathname === '/tvshows') && (
          <>
            {/* MENU ICON */}
            <div
              className="menu-icon"
              onClick={() => setOpenmenu(!Openmenu)}
            >
              {Openmenu ? (
                <i className="ri-close-line"></i>
              ) : (
                <i className="ri-menu-line"></i>
              )}
            </div>

            {Openmenu && (
              <>
              <div className="mobile-menu">
                 <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/tvshows">TV Shows</Link>
              </div>
              </>
            )}

              <div className="laptop-menu">
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/tvshows">TV Shows</Link>
              </div>

            <input placeholder="Search On Netflix..." type="text" />

            <div className="fav">
              <i className="ri-heart-line"></i>
            </div>
          </>
        )}

        <div className="signup-btn">
          <button onClick={() => navigate("/signup")}>Signup</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar