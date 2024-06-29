import "./scss/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './assets/nav/Nav';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Link } from "react-router-dom";
const safety_picture = "/src/assets/media/Shield.svg";
const convenience_picture = "/src/assets/media/Convenience.svg";
const time_picture = "/src/assets/media/watch.svg";
function App() {
    return (
      <div className='app'>
        <Navbar/>
        <div className="introduction row">
          <h3 className="text-center mb-5">The quickest solution for all the bureaucracy </h3>
          <span className="col-6"></span>
          <Link to="/scan" className="col mb-5"><button >Start scanning!</button></Link>
          <span className="col-4"></span>
        </div>
       
       <div className="why-us row">
        <h2 className="text-center col-12 mb-5">Why us?</h2>
        <span className="col-2"></span>
        <div className="col-2 text-center at mt-5">
            <img src = {safety_picture} className="mt-3"/>
            <h2>Safety</h2>
            <p>Choose us for secure and efficient document scanning.</p>
            <img/>
        </div>

        <div className="col-4 text-center mt-5">
            <img src = {convenience_picture} />
            <h2>Convenience</h2>
            <p>Experience ultimate convenience with our document solutions</p>
        </div>

        <div className="col-2 text-center mt-5">
        <img src = {time_picture} className="mt-3"/>
          <h2 >Time Saving</h2>
          <p>Save your precious time effortlessly with us</p>
        </div>
        <span className="col-2"></span>
       </div>

      
      </div>
  
    )
}

export default App
         