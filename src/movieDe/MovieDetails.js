import React ,{useEffect,useState} from 'react'
import {useParams} from  'react-router-dom';

const MovieDetails = () => {
    const [latest , setlatest]= useState([]);
    const {id} = useParams();
    const Api_url = `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;

    const GetData = async (url) => {
        try {

            const res = await fetch(url);
            const final = await res.json();
            console.log(final.results);
            setlatest(final.results);
        } catch (error) {
            console.log(error)
        }
    }



    useEffect(() => {

        GetData(Api_url);
    }, [id])
    return (
       <>

            <div className="movie-poster">
                                    <img src={`https://image.tmdb.org/t/p/original${ latest && latest.backdrop_path}`} alt="img" />

                                    <div className="poster-overlay">
                                        <div className="movie-title">{latest ? latest.original_title : ""}</div>
                                        <div className="movie-release">{latest ? latest.release_date : ""}

                                            <span className='vote-av'>{latest ? latest.vote_average : ""}</span>

                                        </div>

                                        <div className="movie-des">
                                            {latest ? latest.overview : ""}
                                        </div>
                                    </div>
                                </div>
       </>
    )
}

export default MovieDetails;