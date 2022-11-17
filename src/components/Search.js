import React from 'react';

const Search = (props) => {
    this.state = {
        items: [],
        DataisLoaded: false
    };
    const execute = () =>{
        fetch("https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=AIzaSyAHsKpoDCFfLdMVct7VhEqDCoUrqqXuYaM")
    }
    return ( 
    <div>
        <h1>Hello , {props.value}</h1>
        <input type={'text'}/>
        <button>Click me to search</button>
        
    </div>
    );
}
 
export default Search;