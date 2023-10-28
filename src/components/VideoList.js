import React from 'react'
import PlayButton from './PlayButton'
import Video from "./Video"

function VideoList({video}){
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
        > 
        <PlayButton>{v.title}</PlayButton>
      </Video>}
      )
      }  
    </div>
  )
}

export default VideoList