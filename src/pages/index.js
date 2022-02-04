import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Jobs />
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
