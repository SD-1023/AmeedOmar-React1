import React from "react";
import { useFavourites } from "../Pages/FavContext";
import DrawStars from "./DrawStars";

function FavouritesPanel(props) {
  const { favItems } = useFavourites();

  return (
    <div class="favourites-container" id="favourites-container">
      <div class="favourites-content">
        <h2 class="fav-topics-title">
          <strong> My Favourite Topics</strong>
        </h2>

        <div class="favs-cards">
          {favItems.map((item) => {
            return (
              <div class="favs-card">
                <div class="fav-card-content">
                  <div class="card-fav-img">
                    <img
                      class="fav-img"
                      src={require(`./../Logos/${item.image}`)}
                      alt="HTML Img"
                    />
                  </div>
                  <div class="card-fav-bottom">
                    <h1 class="fav-title overflow-ellipsis">
                      {favItems && item.name}
                    </h1>
                    <DrawStars uiRating={item.rating} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FavouritesPanel;
