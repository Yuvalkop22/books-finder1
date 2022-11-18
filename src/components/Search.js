import {React, useState, useRef} from 'react';
import BookList from './BookList';
const Search = (props) => {
    const [all,setAll] = useState([]);
    const [isShown, setIsShown] = useState(false);
    const [searchValue,setSearchValue] = useState("");
    const searchRef = useRef();
    const fetching = (e) => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=AIzaSyAHsKpoDCFfLdMVct7VhEqDCoUrqqXuYaM")
            .then((res) => res.json())
            .then((data) => setAll(data.items));
        setSearchValue(searchRef.current.value);
        console.log(searchValue);
        //setIsShown(current => !current);
    }
    return (
        <div>
            <h1>Hello , {props.value}</h1>
            <input type={'text'} ref={searchRef} placeholder={"Enter Author Name"} />
            <button onClick={fetching}>Click Me to Search</button>
            {/* {
                isShown && (
                    <div>
                        <BookList bookList={all}/>
                    </div>
                )
            } */}
            {
                all.filter(item => item.id === searchValue).map(item => <h1>{item.volumeInfo.title}</h1>)            
            }            
            
            
        </div>
     )
};

export default Search;