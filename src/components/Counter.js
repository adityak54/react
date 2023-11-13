import { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import './Counter.css'
function Counter(){
    const mode = useContext(ThemeContext)
    let [number, setNumber] = useState(0);

    function increment(e){
        e.stopPropagation();
        setTimeout(function(){
            setNumber(number=>number+1);
        },2000)
    }
    return(
        <>  
        <h1 className={mode}>{number}</h1>
        <button  onClick={increment}>ADD</button>
        </>
    );
}
export default Counter;