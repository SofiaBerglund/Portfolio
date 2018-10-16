import React from "react"
import Footer from "../components/footer"

const projectsJson = require("../tech-projects.json")

class ProjectPage extends React.Component {

  render() {

    const projectId = this.props.match.params.id

    // const projectData = projectsJson.projects.find((element) => {
    //   return element.id
    // })

    const projectData = projectsJson.projects[projectId-1]

    return (
      <div>
        {projectData.title}
      </div>
    )
  }

}

export default ProjectPage
