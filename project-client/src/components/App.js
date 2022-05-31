import {Switch, Route, useParams} from 'react-router-dom';
import { useState, useEffect } from 'react'
import NavBar from './NavBar';
import About from './About';
import Home from './Home';
import Login from './Login';
import Reviews from './Reviews'

function App() {
  const [bootcamps, setBootcamps] = useState([])

  let { id } = useParams()
  console.log(bootcamps)
  // console.log(id)

    useEffect(() => {
        fetch('http://localhost:9292/bootcamps')
        .then(res => res.json())
        .then(data => setBootcamps(data))
    },[])

  return (
    <div>
      <NavBar/>
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/bootcamps">
          <Home bootcamps={bootcamps}/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/bootcamps">
          <Reviews/>
        </Route>
      </Switch>
    </div>
    
  )
}

export default App;
