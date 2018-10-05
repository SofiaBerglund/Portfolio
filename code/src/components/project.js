import React from "react"

export default class Project extends React.Component {


  render() {

    return (

      <div className="project-content">
        <div className="projects-content-title">
          <h2>{this.props.title}</h2>
        </div>
        <div className="projects-content-img">
          <img src={this.props.image} alt="project image"/>
        </div>
      </div>

    )
  }
}
