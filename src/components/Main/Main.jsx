import { Route, Routes } from "react-router-dom";
import Movies from "./Home/Movies";

const Main = () => {
  return <main>
    <Routes>
    <Route path="/all-movies" element={<Movies />} />
    <Route path="/action" element={<Movies />} />
    </Routes>
  </main>;
};

export default Main;
