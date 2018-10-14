import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import LandingPage from "./pages/landing-page"
import ProjectPage from "./pages/project-page"

class App extends React.Component {

  render() {

    return (
      <Router>
        <div>
          <Route path="/" exact="true" component={LandingPage} />
          <Route path="/projects:id" exact="true" component={ProjectPage} />
        </div>
      </Router>
    )
  }

}

export default App
