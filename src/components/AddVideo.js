import React, { useState } from 'react'
import './AddVideo.css'

// AB HAM FORM KE JARIYE VIDEO DETAILS LENGE AUR FIR ADD RENDER KARAYENGE USSE

// title, channel, views me jo changes honge usse ek object me store kar lenge, fir usse pass kar denge App.js me
// prop ka use karke bhejenge
function AddVideo ({addVideos})  {
    let initialState = { 
        title:'',
        views:'',
        channel:'',
        img : "https://loremflickr.com/g/320/240/pakistan",
        verified : true
    }
    const [video, setVideo] = useState(initialState);
    function handleClick(e){
        e.preventDefault(); //form ka default behaviour hai ki reload ho jaata hai submit hone pe, we will prevent that from this
        addVideos(video); 
        setVideo(initialState)
    }
    function handleChange(e){
        // console.log(e.target.name, e.target.value);
        setVideo({...video,
            // e.target.name : e.target.value; ye allowed nahi hota
            // 'key' variable nahi hota
            // to avoid this we will cover it with square brackets, this will mean, first evaluate it then assign
            [e.target.name] : e.target.value,
           
    })
    }
  return (
    <form>
        {/* value={video.title} se ye waala input controlled state me aa gaya.
            Now we can control its state according to video.title
            on clicking, we want the inputs to be blank again without reloading the page, 
            to do that we need to manage their state, therefore we need to be able to control their state*/}

            {/* as first input is controlled now, on clicking the button, we will reinitialise the
                value of video.title to empty string, isse waapas blank ho jaayega */}
        <input value={video.title} name='title' onChange={handleChange} type='text' placeholder='Title'/>

                {/* we can do this for rest of the inputs as well */}
                {/* we need to use value={video.channel} abs value={video.views} */}
        <input name='channel' onChange={handleChange} type='text' placeholder='Channel'/>
        <input name='views' onChange={handleChange} type='text' placeholder='Views'/>
        <button onClick={handleClick}>Add Video</button>
    </form>
  )
}

export default AddVideo