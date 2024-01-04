import React from "react";
let prop = 6;

function TopicsNum(prop) {
  return (
    <div className="container-num-topics flex justify-center align-center">
      <div className="num-topics global-position flex align-center">
        <h2 className="num-topics" id="num-topics">
          "{prop.topicsNum}" Web Topics Found
        </h2>
      </div>
    </div>
  );
}

export default TopicsNum;
