import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home";
import "./Css/App.css"
import Navibar from './Components/Navibar';

import SignupForm from './Components/signup/SignupForm'


function App() {
  return (
    <div className="App">

       <Navibar/>
     {/* <SignupForm/>      */}
    </div>
  );
}

export default App;
