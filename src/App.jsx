import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import "./App.css";

import { createClient } from "contentful";
function App() {
  const [movies, setMovies] = useState([]);

  const SPACE_ID = "srxdrtp8asux";
  const ACCESS_TOKEN = "OAN2Iy_jUvtzP_OmX3_kfbpIT02AG5adBg1yVVuCSgk";
  const ENVIROMENT_NAME = "master";
  const client = createClient({
    space: SPACE_ID,
    environment: ENVIROMENT_NAME, // defaults to 'master' if not set
    accessToken: ACCESS_TOKEN,
  });
  useEffect(() => {
    client
      .getEntries()
      .then((response) => setMovies(response.items))
      .catch(console.error);
  }, []);

  return (
    <>
   { 
   movies.length > 0 ? (<div className="page-wrapper">
      <Header />
      <Main movies={movies} />
      <Footer />
    </div>): (<Loader/>)}
    </>
    
  );
}

export default App;
