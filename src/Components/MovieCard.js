import React from 'react'
import './MovieCard.css';
function MovieCard(props) {

    const {id, title, genre, director, stars, pageViews, language, totalVoted, releasedDate, poster, runTime} = props.info;


  return (
    <div className='card'>
        <img src={poster} alt="movie-poster" className='card__image'/>
        <div className="card__body">
            <h4>{title}</h4> 
            <p>Genre: {genre}</p>
            <p>{director[0] ? `Director: ${director[0]}` : 'Director: '}</p>
            <p>Starring: </p>
            <p>{pageViews} | Voted by {totalVoted} people</p>
        </div>
    </div>
  )
}

export default MovieCard;