import Header from "./Components/Header";
import Welcoming from "./Components/Welcoming";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import { FavouriteProvider, useFavourites } from "./Pages/FavContext";
import FavouritesPanel from "./Components/FavouritesPanel";

function App() {
  const { isFavOpen } = useFavourites();
  return (
    <FavouriteProvider>
      <BrowserRouter>
        <Routes>
          <Route path="AmeedOmar-React1/" element={<Home />} />
          <Route
            path="AmeedOmar-React1/react-gh-pages/details"
            element={<Details />}
          />
        </Routes>
      </BrowserRouter>
    </FavouriteProvider>
  );
}

export default App;
