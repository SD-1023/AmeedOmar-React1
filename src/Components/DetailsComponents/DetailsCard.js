import React, { useEffect, useState } from "react";
import { useFavourites } from "../../Pages/FavContext";

function DetailsCard(prop) {
  const [favAction, setFavAction] = useState("Add To Favourites");
  const [topics, setTopics] = useState(prop.prop);

  const { isFavItem, addToFavItems, removeFromFavItems, favItems } =
    useFavourites();
  const id = prop.prop.id;
  const [isFavTopic, setIsFavTopic] = useState(isFavItem(id));
  useEffect(() => {
    setIsFavTopic(isFavItem(id));
    console.log("inside use Effect for details card");
    console.log(id);
  }, [favItems]);
  console.log("IDDDDDDDDDDDDDD");
  console.log(prop.prop.id);
  console.log(topics.id);

  // function handleAddToFav() {
  //   if (favAction == "Add To Favourites")
  //     setFavAction("Remove from Favourites");
  //   if (favAction == "Remove from Favourites")
  //     setFavAction("Add To Favourites");
  // }

  const toggleFavItem = () => {
    if (isFavTopic) {
      removeFromFavItems(topics.id);
    } else {
      addToFavItems(topics);
    }
  };
  return (
    <div class="card-details-container">
      <div class="card-details">
        <div class="card-img">
          <img
            src={require(`../../Logos/${prop.prop.image}`)}
            class="img-details"
            id="image"
          />
        </div>
        <div class="card-details-content">
          <div class="card-auther-by">
            <span class="course-title-auther">
              <strong id="topic_card">{prop.prop.topic} </strong>
              by {prop.prop.name}
              <a href="www.google.com" id="author"></a>
            </span>
          </div>
          <div class="card-box">
            <p class="card-box-q">Interested about this topic?</p>
            <button
              class="card-box-btn"
              id="addToFavouriteBtn"
              // onClick={handleAddToFav}
              onClick={toggleFavItem}
            >
              <span id="addToFavText">
                {" "}
                {isFavTopic ? "Remove from Favourites" : "Add to Favourites"}
              </span>
              <span id="AddToFavHeart">
                <ion-icon name="heart-outline" class="fav-heart"></ion-icon>
              </span>
            </button>
            <p class="card-box-footer">Unlimited Credits</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsCard;
