import React from "react";
import { Route, Switch } from "react-router-dom";
import ErrorBoundary from "../Components/Error/errorBoundary";
import Dashboard from "../Components/layouts/dashboard";
import Layout from '../Components/layouts/layout';
import Layout2 from '../Components/layouts/layout2';

export default function MenuRoutes()  {
    return (     
        <Switch>  
          <Route exact path="/dashboard" component={Dashboard} /> 
          <Route exact path="/layout" component={Layout} />
          <Route exact path="/layout2" component={Layout2} />
        </Switch>  
    );
  }

