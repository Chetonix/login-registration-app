import React from "react";
import { useState, useEffect } from "react";

function Home() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  fetch(`https://hoblist.com/api/movieList`)
   .then((response) => console.log(response));
 }, []);


  return (
    <>
      <h1>Login Successfully</h1>
    </>
  );
}

export default Home;
