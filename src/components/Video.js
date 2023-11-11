import { useState } from 'react'
import './Video.css'

function Video({title,id,img,channel,views,verified,children,editVideo,dispatch}){
    return(
        <>
        <div className="vid">
            <button className='close' onClick={()=>dispatch({type:'DELETE', payload:id})}>X</button>
            <button className='edit' onClick={()=>editVideo(id)}>Edit</button>
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