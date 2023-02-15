import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import UserHome from "./components/dashboard/UserHome";
import Home from "./components/Home"

function App() {
  return (
  
<Router>
<Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/register"><Register /></Route>
            <Route exact path="/dashboard"><UserHome tab="dashboard"/></Route>
            <Route exact path="/profile"><UserHome tab="profile" /></Route>

          </Switch>
</Router>


  
  );
}

export default App;
