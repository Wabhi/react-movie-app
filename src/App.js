import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import MovieDetails from "./components/movieDetails/MovieDetails";
import movieApi from "./common/apis/movieApi";
import { API_KEY } from "./common/apis/aipKeys";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div className="container">
          <Switch>
            <Route path="/" exact element={<Home />} />
            <Route path="/movie:imbdId" element={<MovieDetails />} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
