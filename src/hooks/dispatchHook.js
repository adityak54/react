import { useContext } from "react";
import DistpatchContext from "../context/DispatchContext";

function useDispatch(){
    return useContext(DistpatchContext)
}

export default useDispatch