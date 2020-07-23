import React from 'react';
import Routes from "./routes";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Routes/Dashboard";

const App = () => {

  return (   
    <div className="App">
          <Routes/> 
        <Switch>
     <Route exact path="/Dashboard" component={Dashboard} />
     </Switch>
      </div>
  )

}

export default App;
