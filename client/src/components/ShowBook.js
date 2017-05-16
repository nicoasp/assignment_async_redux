import React from 'react'

const Widget = (widget) => {
    return (
        {widget}    
    );
}


// Custom card component for each user's data
const BookCard = ({book}) => {
  const { title, id, image_url, description, author, reviews_widget } = book;
  // Set the CSS max-width attribute directly in the
  // element. `style` accepts a JS object and the
  // attributes use camelcase. See docs for more info.
  // Also using new card class for Bootstrap 4.
  
  return (
    <div
      className="BookCard card"
      style={{}}
    >
      <img
        className="card-img-top img-responsive"
        src={image_url}
        alt="book cover"
      />
      <div className="card-block">
        <h4>{title}</h4>
        <h5>{author}</h5>
      </div>
      <div className="ReviewsWidget">
        {Widget(reviews_widget)}
      </div>
      
      
    </div>
  )
}

export default BookCard