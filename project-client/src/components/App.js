
function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route path="/logout">
          <Logout/>
        </Route>
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
