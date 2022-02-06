import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"

const Projects = ({ projects, title, showLink, images }) => {
  const newArr = [] //declaring array for function in next line

  function newItems(arr) {
    //this function is used to combine both images and
    //project objects to be passed to Project component
    for (var i = 0; i < projects[0].data.length; i++) {
      const newProjects = projects[0].data[i].attributes
      const newItem = { ...newProjects, ...images[i] }
      arr.push(newItem)
    }
    return arr
  }
  newItems(newArr)
  console.log(newArr)

  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center project-center">
        {newArr.map((project, index) => {
          return <Project key={project.ID} index={index} {...project} />
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
