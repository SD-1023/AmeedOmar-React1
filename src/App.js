import Header from "./Components/Header";
import Welcoming from "./Components/Welcoming";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Routes, Route, Router } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import { FavouriteProvider, useFavourites } from "./Pages/FavContext";
import FavouritesPanel from "./Components/FavouritesPanel";

function App() {
  const { isFavOpen } = useFavourites();
  return (
    <FavouriteProvider>
      <Router basename="/AmeedOmar-React1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </FavouriteProvider>
  );
}

export default App;
