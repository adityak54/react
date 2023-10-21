import { useState } from "react";

function Counter(){
    // read documentation (state: A component's memory)
    // basically useState ek array return karta hai therefore usko destructure kar rahe ham
    // number ki initital value 0 hogi aur setNumber function usse set karega
    let [number, setNumber] = useState(0);

    function increment(e){
        e.stopPropagation();
        // 1st -> setNumber(number+1);  2nd -> setNumber(number=>number+1);
        // in between of rendering, agar user dubara click kar deta hai to upar waale method se ek aur 
        // baar number increment nahi hoga 
        setTimeout(function(){
            setNumber(number=>number+1);
        },2000)
        console.log(number);
    }
    return(
        <>  
        <h1>{number}</h1>
        <button onClick={increment}>ADD</button>
        </>
    );
}
export default Counter;