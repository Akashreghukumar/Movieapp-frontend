import React from "react";
import {BrowserRouter,Link,Route} from "react-router-dom";
import {Switch} from "react-router"; 
import SignupComponent from "./SignupComponent";
import LoginComponent from "./LoginComponent"

import MovieComponent from "./MovieComponent";
function RouterComponent(){
    return(
        <>
        <div>
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={SignupComponent}></Route>
                <Route exact path="/signin" component={LoginComponent}></Route>
                <Route exact path="/movie" component={MovieComponent}></Route>
            </Switch>
            </BrowserRouter>
        </div>
        
        
        </>
    )

}

export default RouterComponent;