import React from "react";

function SearchBar({
  searchVal,
  onSearch,
  sortVal,
  onSort,
  filterVal,
  onFilter,
  filterOptions,
}) {
  return (
    <div>
      <div className="search-container flex justify-center">
        <div className="search-bar">
          <div className="input-part flex align-center">
            <label
              htmlFor="search-input"
              className="search-input flex align-center"
            >
              <ion-icon
                className="search-icon"
                name="search-outline"
              ></ion-icon>
            </label>
            <input
              className="search-engine"
              placeholder="Search the website..."
              type="text"
              id="searchInput"
              value={searchVal}
              onChange={(event) => onSearch(event.target.value)}
            />
          </div>
          <div className="sort-filter-parts sort">
            <label className="dropdown-label">&nbsp;Sort by:</label>
            <select
              className="dropdown-btn"
              id="mySortDropdown"
              name="filter-options"
              value={sortVal}
              onChange={(event) => onSort(event.target.value)}
            >
              <option value="Default">Default</option>
              <option value="topic">Topic Title</option>
              <option value="author">Author Name</option>
            </select>
          </div>

          <div className="sort-filter-parts end-of-search-bar">
            <label className="dropdown-label">&nbsp;Filter by:</label>
            <select
              className="dropdown-btn"
              id="myFilterdDropdown"
              name="filter-options"
              value={filterVal}
              onChange={(event) => onFilter(event.target.value)}
            >
              <option value="Default">Default</option>

              {filterOptions?.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
