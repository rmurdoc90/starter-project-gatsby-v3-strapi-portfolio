import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"

const Projects = ({ projects, title, showLink, images }) => {
  // const newProjects = projects[0].data[0].attributes
  // const item = [...images, newProjects]
  // const newArr = []
  for (var i = 0; i < projects[0].data.length; i++) {
    const newArr = []
    const newProjects = projects[0].data[i].attributes
    const newItem = { ...newProjects, ...images[i] }
    newArr.push(newItem)
    console.log(newArr)
  }

  console.log(projects[0].data)
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center project-center">
        {projects[0].data.map((project, index) => {
          return (
            <Project key={project.attributes.ID} index={index} {...project} />
          )
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  )
}

export default Projects
