import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
function Home() {

console.log("Home called");

 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://hoblist.com/api/movieList`, {
     
      // Adding method type
      method: "POST",
       
      // Adding body or contents to send
      body: JSON.stringify({
        category: "movies",
        language: "kannada", 
        genre: "all",
        sort: "voting"
      }),
       
      // Adding headers to the request
      headers: {
          "Content-type": "application/json; charset=UTF-8"
    }})
      .then((response) => {
        return response.json()
      })
      .then((actualData) => {
        setData(actualData);
        console.log(data);
        console.log("Actual Data: ", actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Movies Posts</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.result.map((d) => (
            <MovieCard key={d.id} info={d}/>
          ))}
      </ul>
    </div>
  );
}


export default Home;
