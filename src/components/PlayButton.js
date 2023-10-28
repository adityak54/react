import React, { Children, useState } from 'react'
import "./PlayButton.css"

function PlayButton({children}) {
    const [playing,setPlaying] = useState(false);
    function buttonIsClicked(e){
        setPlaying(!playing);   
    }
  return (
    <button onClick={buttonIsClicked}>{children}{playing ? " ||" : "  >"}</button>
  )
}

export default PlayButton