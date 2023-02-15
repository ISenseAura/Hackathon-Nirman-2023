import logo from './logo.svg';
import './App.css';

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Features from './components/Features';
import Cards from './components/Cards';
import Register from './components/Register';
import Chat from './components/Chat';
import UserHome from './components/dashboard/UserHome';

function App() {
  return (
  
<Router>
<Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/register"><Register /></Route>
            <Route exact path="/dashboard"><UserHome /></Route>

          </Switch>
</Router>








  
  );
}

export default App;
