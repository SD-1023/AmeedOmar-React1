import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import FavouritesPanel from "./FavouritesPanel";
import { useFavourites } from "../Pages/FavContext";

function Header() {
  const storedMode = localStorage.getItem("mode");
  const body = document.body;

  const [modeText, setModeText] = useState("Dark Mode");
  const [favDisplay, setFavDisplay] = useState(false);
  const { toggleIsFavOpen } = useFavourites();
  const { isFavOpen } = useFavourites();

  useEffect(() => {
    // Set initial mode based on stored preference or default to light mode
    body.classList.toggle("dark-theme", storedMode == "dark-theme");
  }, []);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-theme");

    // Save the current mode preference to localStorage
    const currentMode = body.classList.contains("dark-theme")
      ? "dark-theme"
      : "light";
    localStorage.setItem("mode", currentMode);
    modeText === "Dark Mode"
      ? setModeText("Light Mode")
      : setModeText("Dark Mode");
  };

  // function displayFavourites() {
  //   console.log("Display Favourites Button");
  //   setFavDisplay(!favDisplay);
  //   console.log(favDisplay);
  // }

  return (
    <div>
      <div className="top-flex-container flex justify-center">
        <div className="container-bar global-position flex align-center">
          <Link to="/">
            <h2 className="web-topics">Web Topics</h2>
          </Link>
          <div className="bar-btns">
            <button
              className="btn-dark flex align-center"
              id="darkModeToggle"
              onClick={toggleDarkMode}
            >
              <span className="btn-icon">
                <ion-icon
                  className="dark-mode-icon"
                  name="moon-outline"
                ></ion-icon>
              </span>
              <span className="btn-text" id="DarkModeText">
                {modeText}
              </span>
            </button>
            <button
              className="btn-fav flex align-center"
              id="btn-fav"
              onClick={toggleIsFavOpen}
            >
              <span className="btn-icon">
                <ion-icon className="fav-icon" name="heart-outline"></ion-icon>
              </span>
              <span className="btn-text"> Favourites </span>
            </button>
          </div>
        </div>
      </div>
      {isFavOpen && <FavouritesPanel />}
    </div>
  );
}
export default Header;
