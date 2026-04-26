import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Movies from './components/Movies.jsx'
import Home from './components/Home.jsx'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='movies' element={<Movies/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App