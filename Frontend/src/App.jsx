import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Signup from './auth/Signup.jsx'
import Login from './auth/Login.jsx'
import Movies from './components/Movies.jsx'
import Home from './components/Home.jsx'
import Play from './components/Play.jsx'
import TvShows from './components/TvShows.jsx'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='movies' element={<Movies/>} />
          <Route path='/tvshows' element={<TvShows/>} />
          <Route path='/play' element={<Play/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App