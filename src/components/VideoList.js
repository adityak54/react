import React from 'react'
import PlayButton from './PlayButton'
import Video from "./Video"

function VideoList({video,editVideo,dispatch}){
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
          dispatch={dispatch}
        > 
        <PlayButton>{v.title}</PlayButton>
      </Video>}
      )
      }  
    </div>
  )
}

export default VideoList