import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
const Home = (props) => {
    const navigate = useNavigate();
    const todoRef = useRef();
    const nav = () =>{
        if (todoRef.current.value === '') return
        props.setValue(todoRef.current.value);
        navigate("/search");
    }
    return (
        <div>
            <h4>Value:</h4>
            <input type={'text'} ref={todoRef} />
            <button onClick={nav}>Click To Add User</button>
        </div>
    );
}
export default Home;