import React from 'react';
import {Switch,Route} from 'react-router-dom';

//component
import Login from './components/Login';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/' component={Login}/>
      </Switch>
    </div>
  );
};

export default App;