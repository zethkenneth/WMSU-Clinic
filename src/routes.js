import React from "react";
import { Switch, Route } from "react-router-dom";
//components
import LandingPage from "./Components/Routes/LandingPage";
import  Login  from "./Components/Landing Page/Login";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
     </Switch>
     
);

export default Routes;