import React from "react";
import { BrowserRouter , Route, Link, Switch } from 'react-router-dom';
import App from "./App";
import Service from "./Pages/Service";
import Termsandconditions from "./POLICY/Termsandconditions";


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Service} />
                <Route path="/Product" exact component={App} />
                <Route path="/Terms&conditions" exact component={Termsandconditions}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes