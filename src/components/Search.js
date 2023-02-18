import React, { useState } from "react";
import "../styles/search.css";
import getImages from "../requests/getImages";
import PropTypes from "prop-types";

const Search = ({ page, setSearchResults }) => {
    const [value, setValue] = useState();

    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   setSearchResults(getImages(value));
    // };

    const handleSubmit = async (event) => {
      event.preventDefault();
      setSearchResults(await getImages(value, page));

    };
    
    return (
        <>
        <form className="search-form" onSubmit={handleSubmit}>
        <input 
          className="search-input" 
          type="text" 
          onChange={(e) => setValue(e.target.value)}/>
        <button className="search-button" type="submit">SEARCH</button>
        </form>
        </>
    )
};

export default Search;

Search.propTypes= {
  setSearchResults: PropTypes.func.isRequired,
}