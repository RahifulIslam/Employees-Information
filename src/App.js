import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import { UserProvider } from './components/UserContext/UserContext';

function App() {
  return (
    <div className="App">
     <UserProvider>
      <Router>
      <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
     </UserProvider>

    </div>
  );
}

export default App;
