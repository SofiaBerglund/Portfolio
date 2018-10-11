import React from "react"
import Project from "../components/project/project"
import Footer from "../components/footer"

const projectsJson = require("../tech-projects.json")

class LandingPage extends React.Component {

  render() {

    return (
      <div>

        <div className="landing-page-container">

          <div className="intro-container">
            <div className="image-container">
              <img src="" alt="portrait"/>
              <div className="contact-info">
                <p>email</p>
                <p>number</p>
              </div>
            </div>
            <header>
              <p>Sofia Berglund</p>
              <h1>FRONTEND DEVELOPER</h1>
              <p>Lorem ipsum...</p>
              <button>SEE MY GITHUB</button>
            </header>
          </div>

          <div className="tech-summary">
            <h1>TECH</h1>
            <p>480 coding hours &bull; 50+ individual tasks &bull; HTML5, CSS, SASS, Flexbox, Javascript, ES6, JSX, React, Node.js,
            Mongo DB, API:s &bull; 6 sprints with demos together with companies like Volumental, Bonnier, Comprend @ Technigo &bull; Exploring Machine learning</p>
          </div>

          <div className="projects-container">
            {projectsJson.projects.map((item) => {
              return <Project key={item.id} title={item.title} image={item.image} link={item.link}/>
            })}
          </div>

          <div className="skills-container">
            <h1>SKILLS</h1>
            <div className="skills-content">
              <h2>CODE</h2>
              <ul>
                <li>HTML5</li>
              </ul>
              <h2>TOOLBOX</h2>
              <ul>
                <li>Atom</li>
              </ul>
              <h2>MORE</h2>
              <ul>
                <li>Finance</li>
              </ul>
            </div>
          </div>

          <div className="studies-container">
            <h1>STUDIES</h1>
            <div className="studies-content">
              <h2>FRONTEND DEVELOPER</h2>
              <p>
              Lorem ipsum...
              </p>
              <h2>ACCOUNTING CONSULTANT</h2>
              <p>
              Lorem ipsum...
              </p>
              <h2>BIOLOGY</h2>
              <p>
              Lorem ipsum...
              </p>
            </div>
          </div>

          <button>SEE MY LINKEDIN</button>

        </div>

        <footer>
          <Footer />
        </footer>

      </div>
    )
  }

}

export default LandingPage
