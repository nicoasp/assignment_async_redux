import React from 'react'

// Custom card component for each user's data
const BookCard = ({book}) => {
  const title = null;
  const author = null;
  const imageUrl = null;

  // Set the CSS max-width attribute directly in the
  // element. `style` accepts a JS object and the
  // attributes use camelcase. See docs for more info.
  // Also using new card class for Bootstrap 4.
  return (
    <div
      className="BookCard card"
      style={{maxWidth: '128px'}}
    >
      <img
        className="card-img-top img-fluid"
        src={imageUrl}
        alt="book cover"
      />
      <div className="card-block">
        <h4>{title}</h4>
        <h5>{author}</h5>
      </div>
    </div>
  )
}

export default BookCard