import './Video.css'

/*                              CONDITIONAL RENDERING 
    ->condition ke hisab se hi ham koi chiiz render karenge 
    (eg -> youtube me jo verified channels hote hain unhi ke aage tick hota hai)

    -> isko implement karne ke liye props me ek boolean add kar denge aur ussi ke basis pe show karenge
*/

function Video({title,img,channel="xyz",views="20k",verified,children}){
    return(
        <>
        <div className="vid">
            <div className="pic"><img src={img} /></div>
            <div className='title'>{title}</div>
            <div className='channel'> Channel - {channel} {verified ? '✅' : null}</div>
            <div className='views'>Views - {views}</div>
            {/* PlayButton dikhane ke liye ye niche children use kiye hain */}
            <div>{children}</div>
        </div>
        </>
    )
}



export default Video