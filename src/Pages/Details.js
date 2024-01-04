import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Welcoming from "../Components/Welcoming";
import DetailsInfo from "../Components/DetailsComponents/DetailsInfo";
import DetailsCard from "../Components/DetailsComponents/DetailsCard";
import DetailsSubTable from "../Components/DetailsComponents/DetailsSubTable";
import Spinner from "../Components/Spinner";
import { useParams } from "react-router-dom";
import "../Styels/details.css";
import "../Styels/details-responsive.css";
import "../Styels/common-responsive.css";
import { useLocation } from "react-router-dom";
import Footer from "../Components/Footer";

function Details() {
  const [loading, setLoading] = useState(true);
  const [topicDetails, setTopicDetails] = useState("");
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    console.log('Value of "id" parameter:', id);

    fetch(`https://tap-web-1.herokuapp.com/topics/details/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log("Data fetched successfully:", result);
        setTopicDetails(result);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [location.search]);

  return (
    <div>
      <div className="details-container">
        {loading ? (
          <div>
            <Spinner />{" "}
          </div>
        ) : (
          <div className="content-container">
            <Header />
            <Welcoming />
            <DetailsInfo prop={topicDetails} />
            <DetailsCard prop={topicDetails} />
            <DetailsSubTable prop={topicDetails} />
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
}

export default Details;
