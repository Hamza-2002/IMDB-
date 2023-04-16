import React from 'react'
import { Link } from 'react-router-dom';
import './Cards.css';

const Cards = ({movie}) => {
  return (
    <>
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none",color:"white"}}>

            <div className="cards">
                <img src={` https://image.tmdb.org/t/p/original${ movie && movie.backdrop_path }`} alt="card" />

                <div className="card-upper">
                    <div className="card-title">{movie? movie.original_title:""}</div>
                    <div className="card-relase-date">{movie ? movie.release_date:""}</div>
                    <div className="card-vote">{movie ? movie.vote_average:""}</div>

                    {/* <div className="card-desc">
                        {movie? movie.overview:""}
                    </div> */}
                </div>
            </div>
        </Link>
    </>
  )
}

;export default Cards;