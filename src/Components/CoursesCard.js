import React, { useState } from "react";
import CourseCard from "./CourseCard";
// import { Link } from "react-router-dom";
import Details from "../Pages/Details";
import { Outlet, Link } from "react-router-dom";

function CoursesCard(prop) {
  const [selectedCard, setSelectedCard] = useState(1);

  // const handleCardClick = (id) => {
  //   setSelectedCard(id);
  //   console.log("Handle card click");
  // };
  return (
    <div className="container flex justify-center">
      <div className="cards-container global-position">
        {prop.data ? (
          prop.data.map((item) => (
            <div
              className="cards-container global-position"
              key={item.id}
              // onClick={() => handleCardClick(item.id)}
            >
              <a className="card-container" id="card-container">
                <Link to={`/details?id=${item.id}`}>
                  <CourseCard course={item} />
                </Link>
              </a>
            </div>
          ))
        ) : (
          <h1>No data found</h1>
        )}
      </div>
    </div>
  );
}

export default CoursesCard;
