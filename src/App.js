import './App.css'
import PlayButton from './components/PlayButton'
import Video from "./components/Video"
import videodata from "./data/data"
function App() {
  {onclick}
  return (
    <div onClick={()=>console.log("Parent-Div Clicked")}>
      <h1>Videos</h1>
      {
      videodata.map(function(video){
      return<Video 
      key={video.id} 
      title={video.title} 
      img={video.img}
      channel={video.channel}
      views={video.views}
      verified={video.verified}
      >
      {/* yaha PlayButton ko as a child pass kar diye isse uniquely har ek video ke liye alag alag ban jayega */}
      {/* in sab ka play and pause bhi alag alag hi print hoga */}
      <PlayButton 
      onPlay={()=>console.log(`Playing ${video.title}`)} 
      onPause={()=>console.log(`Paused ${video.title}`)}>{video.title}</PlayButton>
      </Video>}
      
      )}
      {/* <PlayButton onSmash={()=>console.log("Playy")}>PLAY</PlayButton> */}
      {/* <PlayButton onSmash={()=>alert("Pause")}>PAUSE</PlayButton> */}
      
    </div>
  )
}
export default App