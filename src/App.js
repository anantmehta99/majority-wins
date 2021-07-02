import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import PlayGame from './PlayGame';


const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/playgame' component={PlayGame} />
      </Switch>
    </>
  );

}
export default App;
