import React from "react"
import { Link } from "react-router-dom"
import "./project.css"

export default class Project extends React.Component {


  render() {

    return (

      <div className="project-content">
        <a href={this.props.link}>
        <div className="project-content-title">
          <p>{this.props.title}</p>
        </div>
        <div className="project-content-img">
          <img src={this.props.image} alt="project"/>
        </div>
        </a>
      </div>

    )
  }
}
