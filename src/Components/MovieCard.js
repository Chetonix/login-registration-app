import React from 'react'

function MovieCard(props) {

    const {id, title, genre, director, stars, pageViews, language, totalVoted, releasedDate, poster, runTimß} = props.info;

  return (
    <div className='container'>
        <img src={poster} alt="movie-poster" />
        <div className="movie-info">
            
        </div>
    </div>
  )
}

export default MovieCard;