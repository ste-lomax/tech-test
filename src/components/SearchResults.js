import React from "react";
import "../styles/search-results.css";
import PropTypes from "prop-types";

const SearchResults = ({ results }) => {
    if (!results.length) {
        return <p className="results-heading">{randomNoResults}</p>
    } else {
    return (
        <>
        <p className="results-heading" >Search Results</p>
        <div className="image-results">
        {results.map((image, index) => (
            <img className="card-image" key={index} src={image} alt="spaceImage" />
          ))}
        </div>
        </>
        )
    }
}

const randomNoResultsStrings = [
    "No results yet...",
    "The truth is out there...",
    "One small click for man...",
    "Things are only impossible until they're not...",
    "Try not. Do or do not. There is no try.",
    "I'm sorry, Dave. I'm afraid I can't do that.",
    "E.T. phone home...",
    "What do you mean? An African or a European swallow?",
    "Speak friend and enter..."
];

const randomNoResults = randomNoResultsStrings[Math.floor(Math.random()*randomNoResultsStrings.length)];

export default SearchResults;

/* <img className="card-image"
src="https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
alt="space-img" */

SearchResults.propTypes= {
    results: PropTypes.array.isRequired,
};