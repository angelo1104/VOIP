import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import Chat from "./Components/Chat/Chat";
import Pusher from "pusher-js";

function App() {
  //eslint-disable-next-line
  const [{user},dispatch] = useStateValue()

  useEffect(()=>{
    speechSynthesis.getVoices()

    auth.onAuthStateChanged(authUser=>{
      if (authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
    })
  },[dispatch])


  useEffect(()=>{
    const pusher = new Pusher('8cf3bbe87f04c93ad312', {
      cluster: 'us3'
    });

    const channel = pusher.subscribe('MadKit');
    channel.bind('updated', function(data) {

      dispatch({
        type: 'SET_MESSAGE',
        message: data
      })
    });

  },[dispatch])


  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path={'/app'}>
            <Chat/>
          </Route>
          <Route path={'/'}>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
