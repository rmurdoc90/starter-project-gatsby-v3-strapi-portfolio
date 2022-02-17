import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"

const Projects = ({ projects }) => {
  // console.log(projects)

  return (
    <section className="section projects">
      <Title title={projects.title} />
      <div className="section-center project-center">
        {projects.map((project, index) => {
          return <Project key={project.ID} index={index} {...project} />
        })}
      </div>
      {projects.url && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  )
}

export default Projects
