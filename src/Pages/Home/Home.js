import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import './Home.css';
import Movielist from '../../MovieList/Movielist';


const Home = (prop) => {

    const [popularmovie, setpopularmovie] = useState([]);
    const Api_url = "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US";

    const GetData = async (url) => {
        try {

            const res = await fetch(url);
            const final = await res.json();
            console.log(final.results);
            setpopularmovie(final.results);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        GetData(Api_url);
    }, [])
    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    showStatus={false}
                >

                    {
                        popularmovie.map(movie => (
                            <Link style={{ textDecoration: "none", Color: "white" }} to={`/movie/${movie.id}`}>
                                <div className="movie-poster">
                                    <img src={` https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="img" />

                                    <div className="poster-overlay">
                                        <div className="movie-title">{movie ? movie.original_title : ""}</div>
                                        <div className="movie-release">{movie ? movie.release_date : ""}

                                            <span className='vote-av'>{movie ? movie.vote_average : ""}</span>

                                        </div>

                                        <div className="movie-des">
                                            {movie ? movie.overview : ""}
                                        </div>
                                    </div>
                                </div>



                            </Link>
                        ))
                    }
                </Carousel>
                <Movielist/>
                {/* {
                        popularmovie.map(movie => (
                <Link to={`/movier/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>

                    <div className="cards">
                        <img src={` https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="card" />

                        <div className="card-upper">
                            <div className="card-title">{movie ? movie.original_title : ""}</div>
                            <div className="card-relase-date">{movie ? movie.release_date : ""}</div>
                            <div className="card-vote">{movie ? movie.vote_average : ""}</div>

                            <div className="card-desc">
                                {movie ? movie.overview : ""}
                            </div>
                        </div>
                    </div>
                </Link>
                    ))
                } */}
            </div>
        </>
    )
}

export default Home;