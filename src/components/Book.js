import React from 'react'

const Book = (book)=> {
  return (
    <div>
        <h1>Title = {book.title}</h1>
        <h1>Author = {book.author}</h1>
    </div>
  )
}
export default Book;
