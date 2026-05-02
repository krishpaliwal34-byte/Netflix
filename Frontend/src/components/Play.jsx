import React from 'react'
import './Play.css'
import { useLocation, useNavigate } from 'react-router-dom'

const Play = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const movie = location.state;

  if (!movie) {
    return <h2 style={{color:"white"}}>No movie selected</h2>;
  }

  return (
   <>
  <div className="play-container">
  
 <div 
  className="hero"
  style={{ backgroundImage: `url(${movie.Poster || movie.Image})` }}
>
    <img className="mobile-img"src={movie.Image} alt={movie.name} />

    <div className="overlay"></div>

    <div className="content">
      <h1>{movie.name}</h1>
      <p>Enjoy watching {movie.name} in HD quality 🍿</p>

      <div className="buttons">
        <button className="play-btn">▶ Play</button>
        <button className="back-btn" onClick={() => navigate(-1)}>
          ⬅ Back
        </button>
      </div>
    </div>

  </div>

</div>
    </>
  )
}

export default Play;