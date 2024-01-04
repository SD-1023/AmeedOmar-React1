import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "../Components/Header";
import Welcoming from "../Components/Welcoming";
import { useFavourites } from "./FavContext";
import FavouritesPanel from "../Components/FavouritesPanel";

const Layout = () => {
  const id = 7;
  const { isFavOpen } = useFavourites();
  return (
    <>
      <nav>
        {/* <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to={`/details?id=${id}`}>Details</Link>
          </li>
        </ul> */}
        {isFavOpen && <FavouritesPanel />}
        <Outlet />
      </nav>
    </>
  );
};

export default Layout;
