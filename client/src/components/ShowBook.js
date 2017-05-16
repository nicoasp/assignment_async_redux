import React from 'react';
import Button from "./elements/Button";

const makeHTML = (text) => {
    return {
        __html: text
    };
}


// Custom card component for each user's data
const ShowBook = ({book, clearSelectedBook}) => {
  const { title, id, image_url, description, author, reviews_widget } = book;

  
  return (
    <div>
      <br/>
      <Button color="danger" onClick={clearSelectedBook}>Back to List</Button>
      <div
        className="ShowBook card"
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
          <p>{description}</p>
        </div>
        <div className="ReviewsWidget" dangerouslySetInnerHTML={makeHTML(reviews_widget)}>
        </div>
      </div>
    </div>
  )
}

export default ShowBook