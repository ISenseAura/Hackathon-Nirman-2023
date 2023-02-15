import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Register";
//import UserHome from "./components/dashboard/UserHome";
import AdminUserHome from "./components/admin/UserHome";
import UserHome from "./components/dashboard/UserHome";
import Home from "./components/Home"
import C from "./components/c"

function App() {
  return (

<Router>
<Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/register"><Register /></Route>
            <Route exact path="/dashboard"><UserHome tab="dashboard"/></Route>
            <Route exact path="/admin"><AdminUserHome tab="dashboard"/></Route>
            <Route exact path="/adminprofile"><AdminUserHome tab="profile" /></Route>

          </Switch>
</Router>


  
  );
}

export default App;
