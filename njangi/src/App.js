import React from "react"
import LoginPage from "./components/LogInPage";
import HomePage from "./components/HomePage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

export default function App() {
  return <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/homepage">
          <HomePage />
        </Route>
      </Switch>
  </Router>
}