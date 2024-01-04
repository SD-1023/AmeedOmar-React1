import Header from "./Components/Header";
import Welcoming from "./Components/Welcoming";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import { FavouriteProvider, useFavourites } from "./Pages/FavContext";
import FavouritesPanel from "./Components/FavouritesPanel";

function App() {
  const { isFavOpen } = useFavourites();
  return (
    <FavouriteProvider>
      <BrowserRouter basename="/AmeedOmar-React1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </FavouriteProvider>
  );
}

export default App;
