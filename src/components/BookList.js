import React from 'react'
import Book from './Book'
import xtype from 'xtypejs'

export default function BookList(bookList) {
    console.log("bookList = " + xtype(bookList[0]));
    return( 
        bookList.map(book => {return <Book key={book.volumeInfo.title}/>})
)}
