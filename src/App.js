import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar title="Text-transform-logo" />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Textform title="Enter Any Text To Change" />
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
