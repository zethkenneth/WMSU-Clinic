import React from 'react';
import { Link} from "react-router-dom";
import Routes from "./routes";
import Footer from "./Components/Landing Page/Footer";




const App = () => {

  return (   
    
    <div className="App ">
        <div className="container ">     
         <nav>
            <ul>
             <li><Link to="/"> WMSU CLINIC </Link></li>
            </ul>
          </nav>
          <Routes/> 

        </div>
        <Footer></Footer>
      </div>
  )

}

export default App;
