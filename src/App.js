import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { BrowserRouter, Switch , Route } from 'react-router-dom';


const HatsPage = () =>(
  <div>
    <h1>Hatspage</h1>
  </div>
);
const MensPage = () =>(
  <div>
    <h1>Mens page</h1>
  </div>
);
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/hats' component={HatsPage}/>
          <Route path='/mens' component={MensPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
