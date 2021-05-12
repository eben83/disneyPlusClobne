import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/login/login";
import Header from "./components/header/header";
import Home from "./components/home/home";

import './custom.xs.css'
import './custom.sm.css'
import './custom.md.css'
import Detail from "./components/detail/detail";


const App = () => {
  return (
      <div className='app'>
        <Router>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Login/>
                </Route>
                <Route path="/home">
                    <Home/>
                </Route>
                <Route path='/detail/:id'>
                    {/*this path will have "detail" followed by the "id" of the movie*/}
                    <Detail />
                </Route>
            </Switch>
        </Router>
      </div>
  )
}
export default App;