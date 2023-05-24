import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./components/About";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
