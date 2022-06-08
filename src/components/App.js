import React, { useState } from "react";
import "../styles/app.css";
import Search from "./Search";
import SearchResults from "./SearchResults";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);

  return (
    <div className="app">
      <img className="nasa-img" src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" alt="NASA logo"></img>
      <Search setSearchResults={setSearchResults} />
      <SearchResults />
    </div>
  );
}

export default App;
