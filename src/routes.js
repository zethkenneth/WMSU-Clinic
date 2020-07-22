import React from "react";
import { Switch, Route } from "react-router-dom";

//components
import Main from "./Components/Landing Page/Main";
import  Login  from "./Components/Landing Page/Login";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
     </Switch>
    
);

export default Routes;