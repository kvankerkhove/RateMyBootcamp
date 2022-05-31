import {Switch, Route} from 'react-router-dom';
import NavBar from './NavBar';
import About from './About';
import Home from './Home';
import SignUp from './SignUp';

function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/bootcamps">
          <Home/>
        </Route>
        <Route path="/signup">
          <SignUp/>
        </Route>
      </Switch>
    </div>
    
  )
}

export default App;
