import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
const ProjectsPage = ({ data }) => {
  const projects = data.allStrapiProject.nodes[0].data
  const images = data.allImageSharp.nodes
  const newArr = []
  //declaring array variables for function in next line

  function newItems(arr) {
    //this function is used to combine both images and
    //project objects to be passed to Project component
    for (var i = 0; i < projects.length; i++) {
      const newProjects = projects[i].attributes
      const newItem = { ...newProjects, ...images[i] }
      arr.push(newItem)
    }
    return arr
  }
  newItems(newArr)
  console.log(newArr)

  return (
    <>
      <main>
        <section className="projects-page">
          <Projects title="all projects" projects={newArr} />
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProject {
      nodes {
        data {
          attributes {
            description
            featured
            github
            slug
            title
            url
            stack {
              id
              title
            }
            ID
          }
        }
      }
      totalCount
    }
    allImageSharp {
      nodes {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
      totalCount
    }
  }
`

export default ProjectsPage
