import { useContext } from "react";
import VideoContext from "../context/VideoContext";

// jaha jaha VideoContext use hoga waha waha upar wali files import karni
// padegi, hamne useVideo naam ka custom hook banaya jisse direct ham is 
// function ko call karke isse use kar payenge
function useVideo(){
    return useContext(VideoContext)
}

export default useVideo