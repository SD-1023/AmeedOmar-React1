import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Welcoming from "../Components/Welcoming";
import TopicsNum from "../Components/TopicsNum";
import CoursesCard from "../Components/CoursesCard";
// import SearchingBar from "../Components/SearchingBar";
import "../Styels/home.css";
import SearchBar from "../Components/SearchBar";
import Spinner from "../Components/Spinner";
import Footer from "../Components/Footer";
import FavouritesPanel from "../Components/FavouritesPanel";

function Home() {
  const [loading, setLoading] = useState(true);
  const [topics, setTopics] = useState(null);
  const [uiTopics, setUiTopics] = useState(0);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    let searchParams = new URLSearchParams();
    if (search) {
      searchParams.append("phrase", search);
    }

    setLoading(true);
    //Search condition

    fetch(`https://tap-web-1.herokuapp.com/topics/list?${searchParams}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log("Data fetched successfully:");
        setTopics(result);
        //setSortedDataList([...data]); // Don't assign same array for more Set
      })
      .finally(() => {
        setLoading(false);
      });
  }, [search]);

  useEffect(() => {
    if (loading) {
      setCategories([]);
    } else if (topics) {
      let cat = new Set(topics.map((topic) => topic.category));
      setCategories([...cat]);
    }
  }, [loading]);
  useEffect(() => {
    if (topics) {
      setUiTopics(
        topics
          .filter((topics) => {
            if (filterBy) {
              if (filterBy === "Default") return topics;
              return topics.category === filterBy;
            }
            return true;
          })
          .sort((a, b) => {
            switch (sortBy) {
              case `author`:
                return a["name"] > b["name"] ? 1 : -1;
              case `topic`:
                return a["topic"] > b["topic"] ? 1 : -1;
              default:
                return 0;
            }
          })
      );
    }
  }, [topics, sortBy, filterBy]);

  // const handleSort = (selectedOption) => {
  //   console.log(selectedOption);
  // };
  //  <SearchingBar
  //   onSortChange={handleSort}
  //   data={data}
  //   option={selectedOption}
  // />
  return (
    <div>
      <Header />
      <Welcoming />
      <SearchBar
        searhVal={search}
        onSearch={setSearch}
        sortVal={sortBy}
        onSort={setSortBy}
        filterVal={filterBy}
        onFilter={setFilterBy}
        filterOptions={categories}
      />
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div className="courses-layout">
          <TopicsNum topicsNum={uiTopics.length} />
          <CoursesCard data={uiTopics} />
        </div>
      )}
      <Footer />
    </div>
  );
}
//Perant send func to child => using callback

export default Home;
