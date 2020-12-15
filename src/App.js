import React from 'react';
import { Route} from 'react-router-dom'
import PrivateRoute from '../src/components/PrivateRoute.js'
import Homepage from './components/Homepage.js'
import './App.css';

function App() {

  return (
    <>
      <Route exact path='/'>
        <Homepage />
      </Route>
      <PrivateRoute exact path='/chatroom' />
      {/* <PrivateRoute path='/profile'>
        <Profile />
      </PrivateRoute> */}
    </>
  );
}

export default App;

