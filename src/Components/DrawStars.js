import React, { useEffect, useState } from "react";

function DrawStars(prop) {
  const [uiRating, setUiRating] = useState(1);

  useEffect(() => {
    var rating = prop.uiRating;
    let closestRating = Math.round(rating * 2);
    setUiRating(closestRating / 2);
  });
  return (
    <div className="stars-icon" id="starsIcons">
      {uiRating == 5 ? (
        <>
          <ion-icon className="star-icon" name="star"></ion-icon>
          <ion-icon className="star-icon" name="star"></ion-icon>
          <ion-icon className="star-icon" name="star"></ion-icon>
          <ion-icon className="star-icon" name="star"></ion-icon>
          <ion-icon className="star-icon" name="star"></ion-icon>
        </>
      ) : uiRating == 4.5 ? (
        <div>
          <ion-icon className="star-icon" name="star"></ion-icon>
          <ion-icon className="star-icon" name="star"></ion-icon>
          <ion-icon className="star-icon" name="star"></ion-icon>
          <ion-icon className="star-icon" name="star"></ion-icon>
          <ion-icon className="star-icon" name="star-half-outline"></ion-icon>
        </div>
      ) : uiRating == 4 ? (
        <div>
          <ion-icon className="star-icon" name="star"></ion-icon>
          <ion-icon className="star-icon" name="star"></ion-icon>
          <ion-icon className="star-icon" name="star"></ion-icon>
          <ion-icon className="star-icon" name="star"></ion-icon>
          <ion-icon className="star-icon" name="star-outline"></ion-icon>
        </div>
      ) : uiRating == 3.5 ? (
        <div>
          <ion-icon className="star-icon" name="star"></ion-icon>
          <ion-icon className="star-icon" name="star"></ion-icon>
          <ion-icon className="star-icon" name="star"></ion-icon>
          <ion-icon className="star-icon" name="star-half-outline"></ion-icon>
          <ion-icon className="star-icon" name="star-outline"></ion-icon>
        </div>
      ) : uiRating == 3 ? (
        <div>
          <ion-icon className="star-icon" name="star"></ion-icon>
          <ion-icon className="star-icon" name="star"></ion-icon>
          <ion-icon className="star-icon" name="star"></ion-icon>
          <ion-icon className="star-icon" name="star-outline"></ion-icon>
          <ion-icon className="star-icon" name="star-outline"></ion-icon>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default DrawStars;
