import React, { useEffect, useState } from "react";
import item2 from "../Logos/json.png";
// import { starHalf } from "ionicons/icons"; // Import the specific icon you need
import Details from "../Pages/Details";
import DrawStars from "./DrawStars";
function CourseCard(prop) {
  const [uiRating, setUiRating] = useState(1);
  useEffect(() => {
    var rating = prop.course.rating;
    let closestRating = Math.round(rating * 2);
    setUiRating(closestRating / 2);
  });

  return (
    <div>
      <div className="card-img">
        <img
          className="img"
          id="course-img"
          src={require(`../Logos/${prop.course.image}`)}
          alt={`../Logos/${prop.course.image}`}
        />
      </div>
      <div className="card-bottom-content">
        <div className="card-text-container">
          <h1 className="course-field overflow-ellipsis" id="course-field">
            {prop.course.category}
          </h1>
          <h1
            className="course-title overflow-ellipsis two-line-text"
            id="course-title"
          >
            {prop.course.topic}
          </h1>
        </div>

        <DrawStars uiRating={uiRating} />

        <p className="author-name overflow-ellipsis" id="author-name">
          Author: {prop.course.name}
        </p>
      </div>
    </div>
  );
}

export default CourseCard;
