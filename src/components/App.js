import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

const [listings, setListings] = useState([])

useEffect(() => {
  fetch('http://localhost:6001/listings')
    .then(resp => resp.json())
    .then(listings => setListings(listings))
}, [])

function deleteListing(id){
  console.log('deleteFUnction')
  const newListings = listings.filter(listing => listing.id !== id)
  setListings(newListings)
}

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} deleteListing={deleteListing}/>
    </div>
  );
}

export default App;
