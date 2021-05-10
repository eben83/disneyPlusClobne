import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/login/login";
import Header from "./components/header/header";
import Home from "./components/home/home";

import './custom.xs.css'
import './custom.sm.css'
import './custom.md.css'


const App = () => {
  return (
      <div className='app'>
        <Router>
            <Header />
          <Switch>
            <Route path="/home">
                <Home/>
            </Route>              
            <Route exact path='/'>
                <Login/>
            </Route>
              
          </Switch>
        </Router>
      </div>
  )
}
export default App;