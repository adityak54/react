import './App.css'
import Video from "./components/Video"

let obj = {
  title: "ReactJs Tutorial",
  img : "https://loremflickr.com/g/320/240/paris",
  channel : "xyz",
  views : "100k"
}
function App() {
  return (
    <div>
      <h1>Videos</h1>
      {/* basically jaise html me attributes dete the waise hi yaha props dete hain */}
      {/* html:attributes::react:props */}
      
      {/* yaha ham normally propls pass kar rahe */}
      <Video 
      title={"NodeJs Tutorial" } 
      img={"https://loremflickr.com/p/320/240/paris"}
      channel='abc'
      views='100k'
      />

      {/* yaha niche ham spread operator ke through ek object me props pass kar rahe */}
      <Video {...obj}/> 
    </div>
  )
}
// export default app {yaha lowercase allowed hai. End me jaha render kar rahe waha nahi.}
export default App