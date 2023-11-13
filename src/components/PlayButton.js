import React, { Children, useContext, useState } from 'react'
import "./PlayButton.css"
import ThemeContext from '../context/ThemeContext';

function PlayButton({children}) {
    const [playing,setPlaying] = useState(false);
    function buttonIsClicked(e){
        setPlaying(!playing);   
    }
    const theme = useContext(ThemeContext)
  return (
    <button className={`playbutton ${theme}`} onClick={buttonIsClicked}>{children}{playing ? " ||" : "  >"}</button>
  )
}

export default PlayButton