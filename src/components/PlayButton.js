import React, { Children } from 'react'
import "./PlayButton.css"

function PlayButton({children,onPlay,onPause}) {
    // yaha ham ek function (onSmash) hi prop jaisa pass kar rahe
    // (iske through ham dynamic tarike se event handler ko bhej rahe)
    // children -> jo waha Likh rahe wo pass ho raha
    let playing = false;
    function buttonIsClicked(e){

        e.stopPropagation();  // EVENT-BUBBLING rokne ke liye hai(scroll down for details)

        if(playing) onPause();
        else onPlay();
        playing=!playing;   // is boolean ke through play and pause pe switch kar rahe 
    }
  return (
    // ye tarika sahi nahi hai hame function ke through karna hota hai
    // <button onClick={console.log("Clicked!")}>Play</button>

    // click hone pe ye function defined hai (iska ye matlab hai)
    // is function ko "Event Handler function" bolte hai
    // <button onClick={()=>console.log("Clicked!")}>Play</button>
    <button onClick={buttonIsClicked}>{children}</button>
    /* <button onClick={buttonIsClicked()}>Play</button> ye
        galat tarika ho jaayega  */
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