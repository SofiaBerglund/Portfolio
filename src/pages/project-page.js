import React from "react"
import Footer from "../components/footer"

const projectsJson = require("../tech-projects.json")

class ProjectPage extends React.Component {

  render() {

    const projectId = this.props.match.params.id

    const projectData = projectsJson.projects.find((element) => {
      return element.id == projectId
    })

    return (
      <div>
        <div>
          {projectData.title}
        </div>
        <div className="project-content-img">
          <img src={this.props.image} alt="project"/>
        </div>
      </div>  
    )
  }

}

export default ProjectPage
