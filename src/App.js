import { useReducer, useState } from 'react'
import './App.css'
import Counter from './components/Counter'

import videodata from "./data/data"
import AddVideo from './components/AddVideo'
import VideoList from './components/VideoList'

function App() {
  //---------------------------------------------------------------------------------------------
  const [editableVideo, setEditableVideo] = useState(null);
  function editVideo(id){
    setEditableVideo(video.find(function(it){
      return it.id==id;
    }))
  }
  //------------------------------------useReducer hook---------------------------------

  // Reducer function 
  function videoReducer(video,action){
    switch(action.type){
      case 'ADD' : return [...video,
        {...action.payload, id: video.length+1}]
        
        case 'DELETE' : return video.filter(function(v){
        return(
          v.id!=action.payload 
          )
      })
      
      case 'UPDATE' : 
      let temp = [...video];
      const index = temp.findIndex(function(it){
        return it.id==action.payload.id;
      })
      temp[index] = action.payload;
      setEditableVideo(null)
      return temp;

      default :return video;
    }
  }
  // const [video, setVideo] = useState(videodata);
  
  // hamne add,update aur delete ko ek me kar diya using useReducer hook
  const [video,dispatch] = useReducer(videoReducer,videodata);
  /* SYNTAX: 

    video -> jiska hame reducer chahiye
    dispatch -> iske through ham reducer function ko call karenge (sirf issi ko prop ke through
                bhejenge aur alag alag type ke calls kar lenge)
    videoReducer -> ye hamara reducer function hai. Isme ham logic likhenge alag alag type ke calls ke liye
                    ye basically state return karta hai
    videodata -> initial value (jiska ham reducer bana rahe)

    SYNTAX OF dispatch :
    eg) dispatch({type:'DELETE', payload:id}) do parameteres hote hain -> type and payload
        type -> isse ham batate hain ki reducer function jab call hoga to kaun sa functionality chahiye
        payload -> wo chiiz jisme change aane ke karad ham state badalna chah rahe
  */
  


  
  //---------------------------------------------------------------------------------------------
  return (
    <div>
      <AddVideo dispatch={dispatch} editableVideo={editableVideo}/>
      <VideoList dispatch={dispatch} video={video} editVideo={editVideo}/>
      
      <div style={{clear:"both"}}>
      <Counter></Counter>
      </div>
    </div>
  )
}
export default App