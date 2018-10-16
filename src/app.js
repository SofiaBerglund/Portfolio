import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import LandingPage from "./pages/landing-page"
import ProjectPage from "./pages/project-page"

class App extends React.Component {

  render() {

    return (
      <Router>
        <div>
          <Route path="/" exact component={LandingPage} />
          <Route path="/project/:id" component={ProjectPage} />
        </div>
      </Router>
    )
  }

}

export default App
