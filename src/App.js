import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import UserHome from "./components/dashboard/UserHome";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <UserHome />
        </Route>
        <Route exact path="/reg">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
