import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppNavBar from "./components/AppNavBar";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Landing from "./components/layout/Landing";
import { Provider } from "react-redux";
import store from "./store";

import NewListing from "./components/listings/NewListing";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <AppNavBar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/dashboard" component = {Dashboard}/>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/newlisting" component={NewListing} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
