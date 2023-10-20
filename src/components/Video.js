import './Video.css'

// function to UI de dega lekin usme dynamic changes laane ke liye "props" use karte hain

function Video({title,img,channel="xyz",views="20k"}){
    // yaha "{title}" props hai ek
    return(
        <>
        <div className="vid">
            <div className="pic"><img src={img} /></div>
            <div className='title'>{title}</div>
            {/* <div style={{backgroundColor:bgColor}}>{title}</div> */}
            {/* yaha {backgroundColor:bgColor} ek property hua to ye ek aur {} me hoga */}
            <div className='channel'> Channel - {channel}</div>
            <div className='views'>Views - {views}</div>
        </div>
        </>
    )
}

/*----------------------------------------------------------------------------------------------
// function dummy(){ return(<><img src="https://placehold.co/160x90" /><div>React Js Tutorial</div></>)}

// export {Video,dummy} // agar do components bhejne ho to object bana ke bhejte hain
                     // not preferable, har ek component ka alag se file bana kar karna chahiye
---------------------------------------------------------------------------------------------------------*/


export default Video


/*  Rules for JSX (see from docs)
    -> camel case etc 
*/