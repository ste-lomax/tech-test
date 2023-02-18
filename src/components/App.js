import React, { useEffect, useState } from "react";
import "../styles/app.css";
import Search from "./Search";
import SearchResults from "./SearchResults";
import PageButtons from "./PageButtons";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);
  // console.log(searchResults);
  // searchResults.map((e) => console.log(e));

  useEffect(() => {
    
  })

  return (
    <div className="app">
      <img className="nasa-img" src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" alt="NASA logo"></img>
      <Search page={page} setSearchResults={setSearchResults}/>
      <SearchResults results={searchResults}/>
      <PageButtons page={page} setPage={setPage}/>
    </div>
  );
}

export default App;
