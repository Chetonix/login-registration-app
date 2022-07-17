import React from 'react'
import './MovieCard.css';
function MovieCard(props) {

    const {id, title, genre, director, stars, pageViews, language, totalVoted, releasedDate, poster, runTime} = props.info;


  return (
    <div className='card'>
        <img src={poster} alt="movie-poster" className='card__image'/>
        <div className="card__body">
            <h3>{title}</h3> 
            <p><span>Genre:</span> {genre}</p>
            <p><span>Director:</span> {director[0]}</p>
            <p><span>Starring:</span> {stars[0]}</p>
            <p><span>Views:</span> {pageViews} | <span>Voted</span> by {totalVoted} people</p>
        </div>
    </div>
  )
}

export default MovieCard;