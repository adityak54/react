import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

import videodata from "./data/data"
import AddVideo from './components/AddVideo'
import VideoList from './components/VideoList'

function App() {
    /* Chapter-7 me hamne edit aur delete feature add kiya and learned about useEffect hook*/
  //---------------------------------------------------------------------------------------------
  
  const [video, setVideo] = useState(videodata);
  const [editableVideo, setEditableVideo] = useState(null);
 
  function addVideos(v){
    setVideo([...video,
      {...v, id: video.length+1}])
  }
  function deleteVideo(id){
    setVideo(video.filter(function(v){
      return(
        v.id!=id // jiski bhi id match hogi wo chhod ke sab show hoga
      )
    }))
  }
  function editVideo(id){
    // jab bhi edit waala button click hoga, ham editableVideo me ye value daal denge
    // ye value fir prop ke through ham AddVideos me le jaayenge aur form ko update kar denge
    setEditableVideo(video.find(function(it){
      return it.id==id;
    }))
  }

  function updateVideo(v){
    let temp = [...video];
    const index = temp.findIndex(function(it){
      return it.id==v.id;
    })
    temp[index] = v;
    setVideo(temp);
    // console.log(temp);
  }
  //---------------------------------------------------------------------------------------------
  return (
    <div>
      <AddVideo addVideos={addVideos} updateVideo={updateVideo} editableVideo={editableVideo}/>
      <VideoList deleteVideo={deleteVideo} video={video} editVideo={editVideo}/>
      
      <div style={{clear:"both"}}>
      <Counter></Counter>
      </div>
    </div>
  )
}
export default App