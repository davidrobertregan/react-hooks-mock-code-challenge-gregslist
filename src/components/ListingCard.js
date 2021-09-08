import React, {useState}from "react";

function ListingCard( { listing, deleteListing }) {
    
  const [isFavorited, setIsFavorited] = useState(false)

  function handleClick(){
    setIsFavorited(!isFavorited)
  }

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${listing.id}`,{
    method: "DELETE"})
    deleteListing(listing.id)
  }

    return (
      <li className="card">
        <div className="image">
          <span className="price">0$</span>
          <img src={listing.image} alt={listing.description} />
        </div>
        <div className="details">
          {isFavorited ? (
            <button onClick={(handleClick)} className="emoji-button favorite active">★</button>
          ) : (
            <button onClick={handleClick} className="emoji-button favorite">☆</button>
          )}
          <strong>{listing.description}</strong>
          <span> · {listing.location}</span>
          <button onClick={handleDelete}className="emoji-button delete">🗑</button>
        </div>
      </li>
    );
  }


export default ListingCard;
