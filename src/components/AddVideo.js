import React, {useEffect, useState } from 'react'
import './AddVideo.css'
import useDispatch from '../hooks/dispatchHook';

function AddVideo ({editableVideo})  {
    const dispatch = useDispatch();
    let initialState = { 
        title:'',
        views:'',
        channel:'',
        img : "https://loremflickr.com/g/320/240/pakistan",
        verified : true
    }
    const [video, setVideo] = useState(initialState);
    function handleClick(e){
        e.preventDefault(); 
        if(editableVideo){
            // updateVideo(video);
            dispatch({type: 'UPDATE', payload:video})
        }else{
            // addVideos(video); 
            dispatch({type: 'ADD', payload:video})
        }
        setVideo(initialState)
    }
    function handleChange(e){
        setVideo({...video,
            [e.target.name] : e.target.value, 
    })
    }

    useEffect(function(){
        if(editableVideo) setVideo(editableVideo)
    },[editableVideo])

  return (
    <form>
        <input value={video.title} name='title' onChange={handleChange} type='text' placeholder='Title'/>
        <input value={video.channel} name='channel' onChange={handleChange} type='text' placeholder='Channel'/>
        <input value={video.views} name='views' onChange={handleChange} type='text' placeholder='Views'/>
        <button onClick={handleClick}>{editableVideo?"Edit":"Add"} Video</button>
    </form>
  )
}

export default AddVideo