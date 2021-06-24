import LeftsideBox from "./Components/LeftsideBox"
import Navibar from "./Components/Navibar"
import Newsfeed from "./Components/Newsfeed"
import "./Css/App.css"
function App() {
  return (
    <div className="App">
     <Navibar></Navibar>
     <LeftsideBox></LeftsideBox>
     <Newsfeed></Newsfeed>
    </div>
  );
}

export default App;
