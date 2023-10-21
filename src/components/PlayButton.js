import React, { Children, useState } from 'react'
import "./PlayButton.css"

function PlayButton({children,onPlay,onPause}) {
    const [playing,setPlaying] = useState(false);
    function buttonIsClicked(e){
        setPlaying(!playing);   
    }
  return (
    <button onClick={buttonIsClicked}>{children}{playing ? " ||" : "  >"}</button>
  )
}

export default PlayButton


//                      EVENT BUBBLING

/* eg -> maanlog 
<Video onClick={}>
    <PlayButton onClick={}>
    </PlayButton>
</Video> 

ab yaha jab PlayButton click karenge to Video wala click apne aap execute ho jaayega, this is called
event bubbling. Child ke event se parent ka even call ho gaya

isko ham kayi tariko se rok sakte hain. onClick ke liye e.stopPropagation hai
(to see the effect, comment e.stopPropagation and see the console after clicking the button)
*/