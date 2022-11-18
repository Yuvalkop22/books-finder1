import React from 'react'
import Book from './Book'

export default function BookList(bookList) {
    console.log(bookList);
    return( 
        bookList.map(book => {return <Book key={book.volumeInfo.title}/>})
)}
