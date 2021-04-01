import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.scss";
import "./app/shared/styles/globalClasses.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, NotFound, Panel } from "./app/pages";
import { PrivateRoute } from "./app/shared/components";

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <PrivateRoute exact={false} path="/panel" component={Panel} />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
