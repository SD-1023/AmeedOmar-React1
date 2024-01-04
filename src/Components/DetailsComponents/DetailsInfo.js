import React, { useEffect, useState } from "react";
import DrawStars from "../DrawStars";

function DetailsInfo(prop) {
  return (
    <div class="info-container">
      <div class="info">
        <h2 class="course-details-type overflow-ellipsis" id="category">
          {prop.prop.category}
        </h2>
        <h1 class="course-details-title" id="topic">
          {prop.prop.topic}
        </h1>
        <DrawStars uiRating={prop.prop.rating} />

        <p class="course-details-description" id="description">
          {prop.prop.description}
        </p>
      </div>
    </div>
  );
}

export default DetailsInfo;
