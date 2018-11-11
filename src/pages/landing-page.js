import React from "react"
import { Link } from "react-router-dom"
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
              <img src="images/sofia-berglund.png" alt="portrait" />
              <div className="contact-info">
                <p>berglund.sofia@gmail.com</p>
                <p>073-650 84 80</p>
              </div>
            </div>
            <header>
              <p className="name-header">Sofia Berglund</p>
              <h1>FRONTEND DEVELOPER</h1>
              <p>
                Hi! I am a junior frontend developer with previous experience in
                accounting and biology. I love solving problems and writing
                beautiful code. I am a curious and creative perfectionist and a
                team player who love to share knowledge and to learn from
                others.
              </p>
              <button>
                <a href="https://github.com/SofiaBerglund">SEE MY GITHUB</a>
              </button>
            </header>
          </div>

          <div className="tech-summary">
            <h1>TECH</h1>
            <p>
              480 coding hours &bull; 50+ individual tasks &bull; HTML5, CSS,
              SASS, Javascript, ES6, JSX, React, Node.js, API:s &bull; 6 sprints
              with demos together with companies like Volumental, Bonnier,
              Comprend and Svenska Spel @ Technigo
            </p>
          </div>

          <div className="projects-container">
            {projectsJson.projects.map(item => {
              return (
                <Project
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  link={item.link}
                />
              )
            })}
          </div>

          <div className="skills-container">
            <h1>SKILLS</h1>
            <div className="skills-content">
              <div>
                <h2>CODE</h2>
                <ul>
                  <li>HTML5</li>
                  <li>CSS</li>
                  <li>JavaScript ES6</li>
                  <li>React</li>
                  <li>SASS</li>
                  <li>GitHub</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div>
                <h2>TOOLBOX</h2>
                <ul>
                  <li>Visual Studio Code</li>
                  <li>Atom</li>
                  <li>Postman</li>
                  <li>Microsoft Dynamics NAV</li>
                  <li>Palette</li>
                  <li>Centsoft</li>
                  <li>Visma Business</li>
                </ul>
              </div>
              <div>
                <h2>MORE</h2>
                <ul>
                  <li>Team leader</li>
                  <li>System administration</li>
                  <li>Process development</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="studies-container">
            <h1>STUDIES</h1>
            <div className="studies-content">
              <h2>FRONTEND DEVELOPER</h2>
              <p>
                Technigo. Full-time 12 week boot camp / intensive program.
                Covering everything from the basics of programming to how to
                structure and build bigger web projects. Focus on JavaScript.
                Total 480 coding hours, 50+ individual tasks (in HTML5, CSS,
                SASS, JavaScript, JSX, React, Node.js) and 6 sprints with demos
                together with companies like Volumental, Bonnier, Comprend and
                Svenska Spel.
                <br /> Stockholm Sept - Nov 2018
              </p>
              <h2>ACCOUNTING CONSULTANT</h2>
              <p>
                Frans Schartaus Handelsinstitut. Higher Vocational Education.
                <br />
                Stockholm 2011 - 2013
              </p>
              <h2>BIOLOGY</h2>
              <p>
                Stockholm University. Master’s biology program specializing in
                plant systematics.
                <br />
                Stockholm 2005 - 2011
              </p>
            </div>
          </div>

          <button>
            <a href="https://www.linkedin.com/in/sofia-berglund-b04344a7/">
              SEE MY LINKEDIN
            </a>
          </button>
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}

export default LandingPage
