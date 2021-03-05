import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../Components/layouts/dashboard";
import Layout from '../Components/layouts/layout';

export default function MenuRoutes()  {

    return (     
        <Switch>    
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/layout" component={Layout} />
        </Switch>  
    );
  }

