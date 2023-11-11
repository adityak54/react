import { useState } from 'react'
import './Video.css'

function Video({title,id,img,channel,views,verified,children,deleteVideo,editVideo}){
    return(
        <>
        <div className="vid">
            <button className='close' onClick={()=>deleteVideo(id)}>X</button>
            <button className='edit' onClick={()=>editVideo(id)}>E</button>
            <div className="pic"><img src={img} /></div>
            <div className='title'>{title}</div>
            <div className='channel'> Channel - {channel} {verified ? '✅' : null}</div>
            <div className='views'>Views - {views} </div>
            {/* PlayButton dikhane ke liye ye niche children use kiye hain */}
            <div >{children}</div>
        </div>
        </>
    )
}



export default Video