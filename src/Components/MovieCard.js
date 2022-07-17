import React from 'react'

function MovieCard(props) {

    const {id, title, genre, director, stars, pageViews, language, totalVoted, releasedDate, poster, runTimß} = props.info;

  return (
    <div className='container'>
        <img src={poster} alt="movie-poster" />
        <div className="movie-info">
            <h4>{title}</h4> 
            <p>Genre: {genre}</p>
            <p>Director: </p>
            <p>Starring: </p>
            <p>{pageViews} | Voted by {totalVoted} people</p>
        </div>
    </div>
  )
}

export default MovieCard;