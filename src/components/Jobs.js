import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight, FaLongArrowAltRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJob {
      nodes {
        data {
          attributes {
            position
            company
            date
          }
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  console.log(data)
  const {
    allStrapiJob: { nodes: jobs },
  } = data
  const { company, position, date } = jobs[0].data[0].attributes
  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container"></div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {/*description.map(item => {
            return (
              <div key={item.id} className="job-description">
                <FaLongArrowAltRight className="job-icon"></FaLongArrowAltRight>
                <p>{item.name}</p>
              </div>
            )
          })*/}
        </article>
      </div>

      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
