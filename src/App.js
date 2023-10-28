import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

import videodata from "./data/data"
import AddVideo from './components/AddVideo'
import VideoList from './components/VideoList'

function App() {

  //---------------------------------------------------------------------------------------------
  
  const [video, setVideo] = useState(videodata);
 
  function addVideos(v){
    setVideo([...video,
      {...v, id: video.length+1}])
  }
  //---------------------------------------------------------------------------------------------
  return (
    <div>
    {/* iske through ham ek parameter daal diye addVideos function me aur usko ham video me daal diye
        this is called STATE UPLIFTING
        ham basically parent ke state ko badal rahe by using its function indirectly */}
      <AddVideo addVideos={addVideos} />
      <VideoList video={video}/>
      
      <div style={{clear:"both"}}>
      <Counter></Counter>
      </div>
    </div>
  )
}
export default App