import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="Home-bg">
     <div className="Home-container">
      <h1>Unlimited movies,</h1>
      <h1>shows, and more</h1>
      <p>Starts at ₹149. Cancel at any time.</p>

      <div className="btn-box">
        <button onClick={() => navigate('/movies')}>Let's Watch</button>
      </div>
    </div>
    </div>
  )
}

export default Home
