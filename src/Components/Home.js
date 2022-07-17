import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./Home.css";

function Home() {

console.log("Home called");

 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
  const [toggleInfo, setToggleInfo] = useState(false);

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
    <div className="container__home">
      
      <h1 onClick={()=> setToggleInfo(!toggleInfo)}>Company Info</h1>
      {toggleInfo ? (<>
      <div className="outer">
        <div className="inner">
        <p>Company: Geeksynergy Technologies Pvt Ltd</p>
<p>Address: Sanjayanagar, Bengaluru-56</p>
<p>Phone: XXXXXXXXX09</p>
<p>Email: XXXXXX@gmail.com</p>
        </div>
      </div>
      
      </>) : (
      <>
      <h3>Movies Posts</h3>
      
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <div className="movie__page">
        {data &&
          data.result.map((d) => (
            <MovieCard key={d.id} info={d}/>
          ))}
      </div>
      </>
      )}
    </div>
    );
}


export default Home;
