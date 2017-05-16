import React from 'react'

// Custom card component for each user's data
const BookCard = ({book, getSelectedBook}) => {
  const title = book.best_book[0].title[0];
  const author = book.best_book[0].author[0].name[0];
  const imageUrl = book.best_book[0].image_url[0];
  const id = Number(book.best_book[0].id[0]._);



  return (
    <a href="#" onClick={(e) => {
      e.preventDefault();
      getSelectedBook(id);
    }}>
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
    </a>
  )
}

export default BookCard