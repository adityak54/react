import { useContext, useReducer, useState } from 'react'
import './App.css'
import Counter from './components/Counter'

import videodata from "./data/data"
import AddVideo from './components/AddVideo'
import VideoList from './components/VideoList'
import ThemeContext from './context/ThemeContext'

function App() {

  const themeContext = useContext(ThemeContext)
  // console.log({themeContext});

  let [mode,setMode] = useState('darkMode');

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
  const [video,dispatch] = useReducer(videoReducer,videodata);

  //---------------------------------------------------------------------------------------------
  return (
    <ThemeContext.Provider value={mode}>

    <div className={`App ${mode}`}>
    <button onClick={()=>{(mode==='darkMode') ? mode='lightMode' : mode='darkMode'; setMode(mode)} }>Mode</button>
      <AddVideo dispatch={dispatch} editableVideo={editableVideo}/>
      <VideoList dispatch={dispatch} video={video} editVideo={editVideo}/>
      
      <div style={{clear:"both"}}>
      <Counter></Counter>
      </div>
    </div>
    </ThemeContext.Provider>
  )
}
export default App