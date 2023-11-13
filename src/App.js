import { useContext, useReducer, useState } from 'react'
import './App.css'
import Counter from './components/Counter'

import videodata from "./data/data"
import AddVideo from './components/AddVideo'
import VideoList from './components/VideoList'
import ThemeContext from './context/ThemeContext'

function App() {

  
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
  // useContext ke through ham context ko use karenge (see video, playbutton and counter.js files)

  return (
    // hame poore  App me effect dekhna chahte hain therefore poore App ko
    // ThemeContext.Provider se wrap kar diye

    // value -> dena compulsory hai, this is the initial value
    <ThemeContext.Provider value={mode}>

    <div className={`App ${mode}`}>
    {/* ek button bana liya jisse ham darkMode aur lightMode me switch karenge */}
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