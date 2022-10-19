import './App.css';
import NavBar from './navbar';
import {Route,Routes} from "react-router-dom";
import Demopage from "./demppage";

function App() {
  return (
    <div className="App">
      <NavBar weeks={["w15","w16","w17"]}/>
      <Routes>
        {/* <Route path="/" element={"Home"}/> */}
        <Route path="/w/:id" element={<Demopage/>}/>
      </Routes>
    </div>
  );
}

export default App;
