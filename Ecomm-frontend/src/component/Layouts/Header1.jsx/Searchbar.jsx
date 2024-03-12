import React from "react";
import { SearchOutlined, CloseOutlined } from "@mui/icons-material";
import styled from "@emotion/styled";
import "./Searchbar.css";


const SearchBar = {
  display: "flex",
  alignItems: "center",
  width: "auto",
  backgroundColor: "#f2f2f2",
  borderRadius: "5px",
  padding: "7px",
  // @media(max - width: 768px) {
  //   width: 90 %;
}

const SearchInput = {
  width: "100%",
  outline: "none",
  backgroundColor: "transparent",
  marginLeft: "10px",
  marginRight: "10px",
  fontSize: "1.1rem",
  // padding: "5px 8px 0px 8px",
  border: "none",
}

const SearchButton = {
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  cursor: "pointer"
}


const Search = ({
  handleSearchButtonClick,
  handleCrossButtonClick,
  searchBarActive,
  handleSearchFormSubmit,
  handleSearchInputChange,
  searchValue,
}) => {

  return (
    <>
      {!searchBarActive && (
        <div style={SearchButton} onClick={handleSearchButtonClick}>
          <SearchOutlined fontSize="large" className="closeIcon" />
        </div>
      )}
      {searchBarActive && (
        <div style={SearchBar}>
          <div style={SearchButton} onClick={handleSearchFormSubmit}>
            <SearchOutlined fontSize="large" className="closeIcon" />
          </div>
          <form onSubmit={handleSearchFormSubmit} className="search_from">
            <input style={SearchInput}
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={handleSearchInputChange}
            />
          </form>
          <button style={SearchButton} onClick={handleCrossButtonClick}>
            <CloseOutlined fontSize="large" className="closeIcon" />
          </button>
        </div>
      )}
    </>
  );
};

export default Search;
