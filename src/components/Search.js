import {React, useState} from 'react';
import BookList from './BookList';
const Search = (props) => {
    const [all,setAll] = useState([]);
    const [isShown, setIsShown] = useState(false);
    const fetching = (e) => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=AIzaSyAHsKpoDCFfLdMVct7VhEqDCoUrqqXuYaM")
            .then((res) => res.json())
            .then((data) => setAll(data.items));
        //setIsShown(current => !current);
    }
    return (
        <div>
            <h1>Hello , {props.value}</h1>
            <input type={'text'} />
            <button onClick={fetching}>Click Me to Search</button>
            {/* {
                isShown && (
                    <div>
                        <BookList bookList={all}/>
                    </div>
                )
            } */}
            {all.map(item => <h1>{item.volumeInfo.title}</h1>, console.log(all))}            
            
            
        </div>
     )
};

export default Search;