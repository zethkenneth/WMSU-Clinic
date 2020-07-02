import React from "react";
import { Switch, Route } from "react-router-dom";

//components
import Main from "./Components/Main";


const Routes = () => (
    <Switch>
        <Route exact path="/" component={Main} />
     </Switch>
);

export default Routes;