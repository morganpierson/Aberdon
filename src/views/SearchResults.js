import React from 'react';

const SearchResults = (props) => {
  console.log("PROPS ", props)
  return (
    <div>
      <h1>Showing {props.type} results in {props.state}</h1>
    </div>
  )
}

export default SearchResults;