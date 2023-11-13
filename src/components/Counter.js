import { useContext, useRef, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import './Counter.css'

function Counter(){
    // yaha reference store kar liya therefore jab re-render hoga Counter
    // component to save rahega puraana value
    let num = useRef(5); 
    const mode = useContext(ThemeContext)
    let [number, setNumber] = useState(0);

    function increment(e){
        e.stopPropagation();
        setNumber(number+1);
        num.current++; // .current se value aata hai reference ka
    }
    return(
        <>  
        <h1 className={mode}>{number} {num.current}</h1>
        <button  onClick={increment}>ADD</button>
        </>
    );
}
export default Counter;