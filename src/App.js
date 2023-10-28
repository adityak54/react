import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import PlayButton from './components/PlayButton'
import Video from "./components/Video"
import videodata from "./data/data"
import AddVideo from './components/AddVideo'

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
      <div style={{clear:"both"}}>
      <Counter></Counter>
      </div>
    </div>
  )
}
export default App