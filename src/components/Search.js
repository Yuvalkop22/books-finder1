import { React, useState, useRef } from 'react';
import { ReactDialogBox } from 'react-js-dialog-box';
import 'react-js-dialog-box/dist/index.css';
const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const searchRef = useRef();
    async function fetching() {
        const url = "https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=AIzaSyAHsKpoDCFfLdMVct7VhEqDCoUrqqXuYaM";
        const res = await fetch(url);
        const arr = await res.json();
        console.log(arr.items);
        props.setResult(arr.items);
        props.setResult1([]);
        setSearchValue(searchRef.current.value);
    }
    async function fetching1() {
        const url = "https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=AIzaSyAHsKpoDCFfLdMVct7VhEqDCoUrqqXuYaM";
        const res = await fetch(url);
        const arr = await res.json();
        console.log(arr.items);
        props.setResult1(arr.items);
        props.setResult([]);
        setSearchValue(searchRef.current.value);
    }

    const closeBox = () => {
        setIsOpen(false);
    };

    const openBox = (content,title) => {
        setContent(content);
        setTitle(title)
        setIsOpen(true);
    };
    return (
        <div>
            <h1>Hello , {props.value}</h1>
            <input type={'text'} ref={searchRef} placeholder={"Enter Book Name"} />
            <button onClick={fetching}>Click Me to Search</button>
            <button onClick={fetching1}>Click Me to Display all</button>

            {
                props.result.filter(item => (item.volumeInfo.title.includes(searchValue))).slice(0, 20).map(item => (<h4 onClick={() => openBox("by  = " + item.volumeInfo.authors[0] + " , more information = " + item.volumeInfo.subtitle, item.volumeInfo.title)}>{item.volumeInfo.title}</h4>))
            }
            {
                props.result1.slice(0, 20).map(item => (<h4 onClick={() => openBox("by  = " + item.volumeInfo.authors[0] + " , more information = " + item.volumeInfo.subtitle, item.volumeInfo.title)}>{item.volumeInfo.title}</h4>))
            }
            {isOpen && (
                <>
                    <ReactDialogBox
                        closeBox={closeBox}
                        modalWidth='60%'
                        headerBackgroundColor='red'
                        headerTextColor='white'
                        headerHeight='65'
                        headerText = {title}
                        closeButtonColor='white'
                        bodyBackgroundColor='white'
                        bodyTextColor='black'
                        bodyHeight='200px'
                    >
                        <div>
                            <h7>{content}</h7>
                        </div>
                    </ReactDialogBox>
                </>
            )}
        </div>
    );
};

export default Search;