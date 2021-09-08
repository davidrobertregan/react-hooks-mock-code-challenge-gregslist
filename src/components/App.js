import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

const [listings, setListings] = useState([])
const [defaultListings, setDefaultListings] = useState([])

useEffect(() => {
  fetch('http://localhost:6001/listings')
    .then(resp => resp.json())
    .then(listings => {
      setListings(listings)
      setDefaultListings(listings)
    })
}, [])

function deleteListing(id){
  console.log('deleteFUnction')
  const newListings = listings.filter(listing => listing.id !== id)
  setListings(newListings)
}

function setSearchFilter(input){
  console.log('search!')
  const newListings = listings.filter(l => l.description.toLowerCase().startsWith(input.toLowerCase()))
  
  if(input === "") {
    setListings(defaultListings)
  }
  else {setListings(newListings)}
}


  return (
    <div className="app">
      <Header setSearchFilter={setSearchFilter} />
      <ListingsContainer listings={listings} deleteListing={deleteListing}/>
    </div>
  );
}

export default App;
