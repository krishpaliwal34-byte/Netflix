import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import axios from 'axios'

const Navbar = ({setsearch}) => {
  const [Openmenu, setOpenmenu] = useState(false)
  const [name , setname] = useState("");
  const location = useLocation()
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  
  useEffect(()=> {
    const fetchuser = async() => {
      const token = localStorage.getItem("token")
      if(!token) return;

      try{
        const res =  await axios.get(
          "http://localhost:4900/api/auth/dashboard",
        {
          headers:{
            Authorization: token,
          }
        }
        )
        setname(res.data.name)
      }catch(err){
       console.log(err)
      }
    }
      fetchuser();
  },[])

  const logout = () => {
    localStorage.removeItem("token")
    setname("")
    navigate("/")
  }

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
                <button onClick={logout}>Logout</button>
              </div>
              </>
            )}

              <div className="laptop-menu">
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/tvshows">TV Shows</Link>
              </div>

            <input placeholder="Search On Netflix..." type="text" onChange={(e)=> setsearch(e.target.value)} />

            <div className="fav">
              <i className="ri-heart-line"></i>
            </div>
          </>
        )}


         {name ? (
          <>
          <div className="name-nav">
           <h2>Welcome <span>{name}</span></h2>
             <button onClick={logout}>Logout</button>
          </div>
          </>
         ):(
           <div className="signup-btn">
           <button onClick={() => navigate("/signup")}>Signup</button>
           </div>
         )
        }
      </div>
    </nav>
  )
}

export default Navbar