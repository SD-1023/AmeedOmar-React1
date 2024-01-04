import React from "react";

function Welcoming() {
  return (
    <div className="welcome-green-part flex justify-center align-center">
      <div className="green-left-side"></div>
      <div className="green-right-side"></div>
      <div className="welcoming-container">
        <h2 className="h2-welcoming">Welcome to our website!</h2>
        <p className="p-welcoming">
          We have a new design that's fresh, modern, and easy to use.
        </p>
      </div>
    </div>
  );
}

export default Welcoming;
