import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import PlayButton from './components/PlayButton'
import Video from "./components/Video"
import videodata from "./data/data"
function App() {

  //---------------------------------------------------------------------------------------------
  // iski madad se ham dynamically new video component add kar rahe
  const [video, setVideo] = useState(videodata);
  function buttonClicked(){
    // video.push({id:video.length+1,title: "Demo Tutorial",img : "https://loremflickr.com/g/320/240/pakistan",channel : "abc",views : "100k",verified : false})
    // setVidep(video)
    // The above method will not work kyuki setter function me ham copy bhejte hain

    // we can do that using spread operator
    setVideo([...video,{
      id:video.length+1,
    title: "Demo Tutorial",
    img : "https://loremflickr.com/g/320/240/pakistan",
    channel : "abc",
    views : "100k",
    verified : false
    }])
  }
  //---------------------------------------------------------------------------------------------
  return (
    <div>
      <button onClick={buttonClicked}>Add Video</button>
      {
      video.map(function(video){
      return<Video 
      key={video.id} 
      title={video.title} 
      img={video.img}
      channel={video.channel}
      views={video.views}
      verified={video.verified}
      >
      <PlayButton 
      onPlay={()=>console.log(`Playing ${video.title}`)} 
      onPause={()=>console.log(`Paused ${video.title}`)}>{video.title}</PlayButton>
      </Video>}
      )}  
      <div style={{clear:"both"}}>

      <Counter></Counter>
      </div>
    </div>
  )
}
export default App