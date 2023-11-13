import React from 'react'
import PlayButton from './PlayButton'
import Video from "./Video"
import useVideo from '../hooks/videohook'

function VideoList({editVideo}){
  const video = useVideo();  // custom hook
  return (
    <div>
        {
      video.map(function(v){
        return <Video 
          key={v.id} 
          title={v.title} 
          img={v.img}
          channel={v.channel}
          views={v.views}
          verified={v.verified}
          id={v.id}
          editVideo={editVideo}
        > 
        <PlayButton>{v.title}</PlayButton>
      </Video>}
      )
      }  
    </div>
  )
}

export default VideoList