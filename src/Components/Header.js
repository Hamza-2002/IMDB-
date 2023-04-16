import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
        <div className="navbar"  >
            <div className="left-header">
                <Link to='/'><img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"  /></Link>
                
             </div>
             <div className="right-header">  
                <Link to='/movies/popular'  >popular</Link>
                <Link to='/movies/top_rated' >Top Rated</Link>
                <Link to='/movies/upcoming' >upcoming</Link>
            
            </div>
        </div>
    </>
  )
}

export default Header;