import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {


  useEffect(()=>{

    //eslint-disable-next-line
  },[])


  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path={'/'}>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
