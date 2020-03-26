import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import CodeOrange from './pages/CodeOrange'
import BlackSabbath from './pages/BlackSabbath'
import TheChariot from './pages/TheChariot'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Go Home</Link>
          </li>
          <li>
            <Link to="/codeorange">CodeOrange</Link>
          </li>
          <li>
            <Link to="/blacksabbath">BlackSabbath</Link>
          </li>
          <li>
            <Link to="/thechariot">TheChariot</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/codeorange" component={CodeOrange}></Route>
        <Route exact path="/blacksabbath" component={BlackSabbath}></Route>
        <Route exact path="/thechariot" component={TheChariot}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
