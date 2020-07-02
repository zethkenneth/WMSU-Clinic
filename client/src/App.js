import React  from 'react';
import { Link} from "react-router-dom";
import Routes from "./routes";


function App() {
  return (
    <div className="App">
      <div className="container">
        <nav>
          <ul>
           <li><Link to="/"> WMSU CLINIC </Link></li>
          </ul>
          <ul>
            <li>Login</li>
            </ul>
        </nav>
        <Routes/>
      </div>
    </div>
  );
}

export default App;
