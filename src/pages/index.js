import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

const IndexPage = ({ data }) => {
  const {
    allStrapiProject: { nodes: projects },
  } = data
  const {
    allImageSharp: { nodes: images },
  } = data
  console.log(data)
  console.log(projects)
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Jobs />
        <Projects
          title="featured project"
          showLinks
          projects={projects}
          images={images}
        />
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProject(
      filter: {
        data: { elemMatch: { attributes: { featured: { eq: true } } } }
      }
    ) {
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

export default IndexPage
