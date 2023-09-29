import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Tours from '../Pages/Tours'
import Feature from '../Pages/Feature'

function Header() {
  return (
    <>
    <header className='container-fluid bg-secondary'>
    <nav className="navbar navbar-expand-lg sticky-top ">
  <div className="container">
    <Link className='navbar-brand' to="/"> <img src="" alt="" srcset=" http://cdn2-adventure-tours.themedelight.com/wp-content/uploads/2015/09/logo.png" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
        <Link className='nav-link active text-white' to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link active text-white' to="/tours:cid">Tours </Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link active text-white' to="/feature">Feature</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>

   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/tours:cid" element={<Tours/>}/>
    <Route path="/feature" element={<Feature/>}/>
   </Routes>
    </>
  )
}

export default Header