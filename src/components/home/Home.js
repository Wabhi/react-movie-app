import React, { useEffect, useState } from "react";
import MovieList from "../movieList/MovieList";
import { API_KEY } from "../../common/apis/aipKeys";
import movieApi from "../../common/apis/movieApi";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let searchText = "Harry";
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apikey=${API_KEY}&s=${searchText}&type=movie`)
        .catch((error) => {
          console.log("Error....", error);
        });
      console.log("Response.......", response);
    };
    fetchMovies();
  }, []);
  console.log(">>>>>>>>", data);

  console.log("<<<<<<<", data);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieList />
    </div>
  );
};

export default Home;
