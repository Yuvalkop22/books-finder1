import React from 'react';

const Search = (props) => {
    // this.state = {
    //     items: [],
    //     DataisLoaded: false
    // };
    // const execute = () => {
    //     fetch("https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=AIzaSyAHsKpoDCFfLdMVct7VhEqDCoUrqqXuYaM").
    //         then((res) => res.json()).then((json) => {
    //             this.state({
    //                 items: json,
    //                 DataisLoaded: true
    //             });
    //         });
    // };
     return (
        <div>
            <h1>Hello , {props.value}</h1>
            <input type={'text'} />
            <button>Click me to search</button>
            <h1> Fetch data from an api in react </h1>
        </div>
     )
};

export default Search;