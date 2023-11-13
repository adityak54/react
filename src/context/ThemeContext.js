import { createContext, useContext } from "react";


// yaha ham ek context bana liye using createContext 

// ab jaha jaha hame iss context ka effect dekhna hai, wo compononent
// <ThemeContext.provider> me wrap hona chahiye
// darkMode -> initial value hai
const ThemeContext = createContext('darkMode');

export default ThemeContext