import { useContext } from 'react'
import './Video.css'
import ThemeContext from '../context/ThemeContext'
import useDispatch from '../hooks/dispatchHook'

function Video({title,id,img,channel,views,verified,children,editVideo}){
    const mode = useContext(ThemeContext)
    const dispatch = useDispatch(); // custom hook
    return(
        <>
        <div className="vid">
            <button className='close' onClick={()=>dispatch({type:'DELETE', payload:id})}>X</button>
            <button className='edit' onClick={()=>editVideo(id)}>Edit</button>
            <div className="pic"><img src={img} /></div>
            <div className={`title ${mode}`}>{title}</div>
            <div className={`channel ${mode}`}> Channel - {channel} {verified ? '✅' : null}</div>
            <div className={`views ${mode}`}> {views} </div>
            {/* PlayButton dikhane ke liye ye niche children use kiye hain */}
            <div >{children}</div>
        </div>
        </>
    )
}



export default Video