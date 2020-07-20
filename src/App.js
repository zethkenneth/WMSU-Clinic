import React,{ useState }  from 'react';
import { Link} from "react-router-dom";
import Routes from "./routes";
import Footer from "../src/Components/Footer";

function App() {
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
      </div >
      
     
    
  );
}

export default App;
