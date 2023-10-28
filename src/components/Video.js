import { useState } from 'react'
import './Video.css'

function Video({title,img,channel,views,verified,children}){
    return(
        <>
        <div className="vid">
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