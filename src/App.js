import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import About from "./components/About";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

const App = () => {
  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath !== "/home") {
      window.history.pushState({}, "", "/home");
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Redirect to="/home" />
      </Switch>
    </Router>
  );
};

export default App;
