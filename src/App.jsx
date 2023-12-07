import { useState, useEffect } from "react";

import "./App.css";
//const contentful = require('contentful');
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

  //let url = https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIROMENT_ID}/entries?access_token=${ACCESS_TOKEN}

  return (
    <>
      <ul>
        {movies.map((x) => (
          <li key={x.fields.title}>
            <div>
              <img src={x.fields.image.fields.file.url} alt="" />

              <p>{x.fields.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
