import React, { useState } from "react";
import "../styles/search.css";

function Search() {
    const [value, setValue] = useState();
    return (
        <>
        <form className="search-form">
        <input 
          className="search-input" 
          type="text" 
          value={value} 
          onChange={(e) => setValue(e.target.value)}/>
        <button className="search-button" type="submit">SEARCH</button>
        </form>
        </>
    )
}

export default Search;